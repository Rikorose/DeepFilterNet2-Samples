---
permalink: /about/
title: "About"
author_profile: true
---

This website contains audio samples from the DNS4 blind test set enhanced with DeepFilterNet2.

The corresponding DeepFilterNet2 paper and code are available at: 
[paper](https://arxiv.org/abs/2205.05474), [code](https://github.com/Rikorose/DeepFilterNet)

### Abstract

Deep learning-based speech enhancement has seen huge improvements and recently also expanded to full band audio (48 kHz). However, many approaches have a rather high computational complexity and require big temporal buffers for real time usage e.g. due to temporal convolutions or attention. Both make those approaches not feasible on embedded devices. This work further extends DeepFilterNet, which exploits harmonic structure of speech allowing for efficient speech enhancement (SE). Several optimizations in the training procedure, data augmentation, and network structure result in state-of-the-art SE performance while reducing the real-time factor to 0.04 on a notebook Core-i5 CPU. This makes the algorithm applicable to run on embedded devices in real-time. The DeepFilterNet framework can be obtained under an open source license. 
