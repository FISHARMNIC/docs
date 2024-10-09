# How To

---

## Dependencies
* NodeJS
* If on MacOS
    * LimaVM
    * XQuartz (only if you are planning to use the graphics library)
* gcc multilib (`sudo apt-get install gcc-multilib`)
* gmp (needed if using bignums) (`sudo apt-get install libgmp3-dev`)
* 32bit x11 (needed if using graphics)
    * `dpkg --add-architecture i386; sudo apt-get update; sudo apt-get install libx11-dev:i386`
* *Note: if on mac, these should be installed in Lima. otherwise just install these normally*

## Installing
* Clone [this](https://github.com/FISHARMNIC/HAMprimeC2/tree/main) repository

## Compiling
* Cd into `compiler`
* Run `node main.js <file name in test/working directory>`
    * For example: `node main.js arrays.x`
    * This creates an assembly file in `compiled/out.s`

## Running (no graphics)
* MacOS
    * Enter Lima shell
    * If running for first time, run `./scripts/BUILD.sh`
    * Run `./scripts/assemble.sh`
* Linux
    * If running for first time, run `./scripts/BUILD.sh`
    * Run `./scripts/assemble.sh`

## Running (with graphics)

* Compile graphics library (one time only)
    * Run `./libs/gfx/compile.sh`
    * If on MacOS, make suret do this in the Lima shell
* MacOS
    * Run `./scripts/lima_x11.sh`
* Linux
    * Run `.compiler/scripts/internal/assemble_x11.sh`