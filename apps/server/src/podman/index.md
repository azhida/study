# Podman 

官网：https://podman.io/

## Podman简介

Podman（Pod Manager）是一个开源的容器管理工具，它提供了一个与 Docker 类似的方式来管理容器。Podman 由 Red Hat 主导开发，是完全免费和开源的。它的设计旨在能够直接运行容器和 Pod（一组容器的集合），并且它与 Kubernetes 的容器生命周期管理兼容。

Podman 的一个主要特点是它不依赖于守护进程（daemon），与 Docker 不同，这使得 Podman 在系统中运行时更加安全和轻量。它使用标准的容器镜像，可以从 Docker 容器镜像库或任何其他兼容 OCI（Open Container Initiative）的容器镜像库拉取镜像。