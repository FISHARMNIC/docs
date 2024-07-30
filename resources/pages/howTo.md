# How To

---

## Dependencies
* NodeJS
* If on MacOS
    * LimaVM
    * XQuartz (only if you are planning to use the graphics library)

## Compiling
    * run `node compiler/main.js <file name in test/working directory>`
        * This creates an assembly file in `compiled/out.s`

## Running (no graphics)
* MacOS
    * Enter `limactl`
    * Run `.compiler/scripts/assemble.sh`
* Linux
    * Run `.compiler/scripts/assemble.sh`

## Running (with graphics)
* Compile graphics library (one time only)
    * Run `./compiler/libs/gfx/compile.sh`
        * If on MacOS, add `limactl shell debian` before this on the same line
* MacOS
    * Run `.compiler/scripts/lima_x11.sh`
* Linux
    * Run `.compiler/scripts/internal/assemble_x11.sh`