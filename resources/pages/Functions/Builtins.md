# Built in Functions

---

# String operations
* `strjoinmany function<u32 number, ...> -> string`
    * Joins `number` strings and returns a new dynamic string
    * Called internally when adding strings
* `ftos function<f32 float> -> string`
    * Converts `float` to a new dynamic string and returns it
    * Called internally when adding float to string
* `itos function<u32 number> -> string`
    * Converts `number` to a new dynamic string and returns it
    * Called internally when adding an integer to a string
* `cptos function<conststr str> -> string`
    * Converts `str` to a new dynamic string and returns it
    * Called internally when autocasting is needed

# Memory operations
* `__copydata__ function<any:dynamic dest, any:dynamic src> -> p32:dynamic`
    * *Have to declare prototype to use this*
    * Copies bytes from `src` to `dest`
        * Both `dest` and `src` **must** be dynamics
        * Number of bytes copied is determined by the size of the *smaller* buffer
    * Used internally by `copy` keyword
* `__duplicate__ function<any:dynamic src>, -> p32:dynamic`
    * *Have to declare prototype to use this*
    * Duplicates the dynamic buffer in `src` and returns the new memory address
    * Used internally by `duplicate`
* `__rc_allocate__ function<u32 bytes, u32 restricted> -> p32:dynamic`
    * *Have to declare prototype to use this*
    * Allocates data of size `bytes` and sets its tranferability to `restricted`
        * if `restricted` is 0, the data can transfer its owner
        * Otherwise, if ownership transfer is attempted, the program will exit with an error message
    * Used internally by any data allocation (strings, arrays, formats)
* `__rc_requestOwnership__ function<p32 value, p32 dest> -> none`
    * *Have to declare prototype to use this*
    * Assigns ownership of the data pointed at by `value` to the buffer pointed at by `dest`
    * `dest` must be the memory address of a dynamic
* `__rc_collect__ function<> -> u32 # none`
    * Manually triggers garbage collector
    * Used internally by `__rc_quick_check__` (below)
* `__rc_quick_check__ function<> -> none`
    * Checks if garbage collection should be triggered depending on the current number of allocated bytes
    * Used intenally at the end of each function

# I/O
* `print_ function function<any value> -> none`
    * Not an actual function, more of a keyword
    * Automatically prints any type x
    * Working:
        * `string`
        * Any format instace. Calls `.toString`
        * Floats
        * Arrays
        * *Integers are currently broken*
* `printf`
    * Standard c printf
* `print_arr32 function<u32 size, p32 array> -> none`
    * *Have to declare prototype to use this*
    * Prints the array `array` of size `size / 4`
        * **Note that size is in BYTES not number of elements**
    * Called internally by `print_`
* `print_arr16 function<u32 size, p16 array> -> none`
    * *Have to declare prototype to use this*
    * Prints the array `array` of size `size / 2`
        * **Note that size is in BYTES not number of elements**
    * Called internally by `print_`
* `print_arr32 function<u32 size, p8 array> -> none`
    * *Have to declare prototype to use this*
    * Prints the array `array` of size `size`
    * Called internally by `print_`
* `print_float_noPromo function<f32 float> -> none`
    * *Have to declare prototype to use this*
    * Prints a float (without dealing with the whole C variadic double promotion mess)
        * Note, you don't need to use this. HAM' automatically circumvents this issue in `printf`
    * Called internally by `print_`
* `print_formatArr function<any toStringFn, u32 size, p32 arr> -> none`
    * *Have to declare prototype to use this*
    * **This function does not currently work**
    * Prints an array of formats, where:
        * `toStringFn` is the address of the formats `.toString()` method
        * `size / 4` is the size of the array
        * `arr` is the array of formats
    
