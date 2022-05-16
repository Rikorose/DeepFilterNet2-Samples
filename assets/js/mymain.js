/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */
'use strict';

var wavesurfer;
let ws = window.wavesurfer;

// Init & load
function initAndLoadSpectrogram(colorMap) {
    // Create an instance
    let options = {
        container: '#waveform',
        waveColor: 'violet',
        progressColor: 'purple',
        loaderColor: 'purple',
        cursorColor: 'navy',
        // backend: 'MediaElement',
        //responsive: true,
        height: 80,
        normalize: true,
        plugins: [
            WaveSurfer.timeline.create({
                container: "#wave-spectrogram"
            }),
            WaveSurfer.spectrogram.create({
                container: '#wave-spectrogram',
                labels: false,
                fftSamples: 1024,
                colorMap: colorMap
            })
        ]
    };

    wavesurfer = WaveSurfer.create(options);

    /* Progress bar */
    (function() {
        let progressDiv = document.querySelector('#progress-bar');
        let progressBar = progressDiv.querySelector('.progress-bar');

        let showProgress = function(percent) {
            progressDiv.style.display = 'block';
            progressBar.style.width = percent + '%';
        };

        let hideProgress = function() {
            progressDiv.style.display = 'none';
        };

        wavesurfer.on('loading', showProgress);
        wavesurfer.on('ready', hideProgress);
        wavesurfer.on('destroy', hideProgress);
        wavesurfer.on('error', hideProgress);
    })();

    // The playlist links
    let links = document.querySelectorAll('#playlist a');
    let currentTrack = 0;

    // Load a track by index and highlight the corresponding link
    let setCurrentSong = function(index) {
        links[currentTrack].classList.remove('active');
        currentTrack = index;
        links[currentTrack].classList.add('active');
        wavesurfer.load(links[currentTrack].href);
        let titleDiv = document.querySelector('#sample-title')
        titleDiv.innerHTML = links[currentTrack].textContent;
    };

    // Load the track on click
    Array.prototype.forEach.call(links, function(link, index) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            setCurrentSong(index);
            //window.wavesurfer.play(0);
        });
    });

    setCurrentSong(0);
}


document.addEventListener('DOMContentLoaded', function() {
    // Load a colormap json file to be passed to the spectrogram.create method.
    fetch('/assets/inferno-cmap.json')
        .then(response => {
            if (!response.ok) {
                    throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(cmap => initAndLoadSpectrogram(cmap))
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});


var GLOBAL_ACTIONS = { // eslint-disable-line
    play: function() {
        window.wavesurfer.playPause();
    },

    back: function() {
        window.wavesurfer.skipBackward();
    },

    forth: function() {
        window.wavesurfer.skipForward();
    },

    'toggle-mute': function() {
        window.wavesurfer.toggleMute();
    }
};

// Bind actions to buttons and keypresses
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', function(e) {
        let map = {
            32: 'play', // space
            37: 'back', // left
            39: 'forth' // right
        };
        let action = map[e.keyCode];
        if (action in GLOBAL_ACTIONS) {
            if (document == e.target || document.body == e.target || e.target.attributes["data-action"]) {
                e.preventDefault();
            }
            GLOBAL_ACTIONS[action](e);
        }
    });

    [].forEach.call(document.querySelectorAll('[data-action]'), function(el) {
        el.addEventListener('click', function(e) {
            let action = e.currentTarget.dataset.action;
            if (action in GLOBAL_ACTIONS) {
                e.preventDefault();
                GLOBAL_ACTIONS[action](e);
            }
        });
    });
});
