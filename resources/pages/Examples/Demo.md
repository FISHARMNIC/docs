# Writing your first HAM` Program

---
Start by following [these instructions](HowTo.html), and entering the `compiler` directory.

Create a new file in `./tests/working` called `first.x`. Much like `main` in C, every file needs an `entry` function. This function tells the computer where to start the program.
```
entry function<> -> u32
{
    
}
```
Here, the entry function is takes (showed by `<>`), and returns a `u32`, or a 32-bit number.
Inside of this function, we can now do anything we want:
```
entry function<> -> u32
{
    printf("Hello World!\n");
}
```
Now, just compile with `node main first.x` and run with `./scripts/assemble.sh` or `./scripts/lima_X11.sh` accordingly. If you're not sure what to use, make sure that you have read the [HowTo](HowTo.html).

If it all worked correctly, you should see:
```
Hello World!
```