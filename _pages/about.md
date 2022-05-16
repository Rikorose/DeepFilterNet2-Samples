---
permalink: /about/
title: "About"
author_profile: true
---

This website contains audio samples from the voice bank / DEMAND test set enhanced with DeepFilterNet.

The corresponding DeepFilterNet paper and code are available at: 
[paper](https://arxiv.org/pdf/2110.05588.pdf), [code](https://github.com/Rikorose/DeepFilterNet)

Abbreviations used in this website:

* DF: Deep Filtering
* CRM: Complex ratio mask
* ERB: Equivalent rectangular bandwidth which models human frequency perception.
* STFT: Short-time Fourier Transform
* stage 1: Speech enhancement stage 1 using predicted ERB gains modeling the spectral envelope.
* stage 2: Refinement stage using deep filtering to enhance the periodic speech components. This reduces the remaining 'roughness' in the speech signal by removing noise between the speech harmonics.

The final DeepFilterNet uses stage 1 for enhancing the spectral envelope and stage 2 using Deep Filtering (DF) for enhancing the periodicity.
All audio samples are derived using a STFT window size of 20ms and a hop size of 10ms.

### Abstract

Complex-valued processing has brought deep learning-based speech enhancement and signal extraction to a new level. Typically, the process is based on a time-frequency (TF) mask which is applied to a noisy spectrogram, while complex masks (CM) are usually preferred over real-valued masks due to their ability to modify the phase. Recent work proposed to use a complex filter instead of a point-wise multiplication with a mask. This allows to incorporate information from previous and future time steps exploiting local correlations within each frequency band. In this work, we propose DeepFilterNet, a two stage speech enhancement framework utilizing deep filtering. First, we enhance the spectral envelope using ERB-scaled gains modeling the human frequency perception. The second stage employs deep filtering to enhance the periodic components of speech. Additionally to taking advantage of perceptual properties of speech, we enforce network sparsity via separable convolutions and extensive grouping in linear and recurrent layers to design a low complexity architecture. We further show that our two stage deep filtering approach outperforms complex masks over a variety of frequency resolutions and latencies and demonstrate convincing performance compared to other state-of-the-art models.
