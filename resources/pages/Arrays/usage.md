# Arrays

---
## Important
Any array that is allocated in the global scope is actually a `p8/p16/p32`. It is basically a pointer variant of the type that it assumes.

Currently, global arrays are broken and might not work depending on your use. So for now, if you want a global array, declare a typed variable globally and then allocate data for it in the entry function

```
create string:array bob;

entry function<>
{
    bob <- {"hello", "world"};
}
```

## Allocation
```
{<value1>,<value2>,...};            // Array that takes all types
<type>{<value1>,<value2>,...};      // Clamped array to certain size
<type>[<size>]                      // Array of type with certain size
```
```
{123,"Hello World!"}                // Allocate array with two elements
u8{254,255,256}                     // Allocate 8bit array. In this example, the 3rd element will overflow to 0
u32[10]                             // Allocate 10 ints
```
## Assignation
```
create <name> <- {<value1>,<value2>,...};
create <name> <- <type>{<value1>,<value2>,...};
create <name> <- <type>[<size>];
```
```
create <name> <pointer type>;                  // Create a pointer 
...
<name> <- <type>{<value1>,<value2>,...};       // Assign the array to the pointer
```
```
create bat p32;                                // Create a pointer variable "bat"  
...
bat <- u32{1,2,3};                             // Assign the array to "bat"
```
## Accessing
```
<array>[<index>];                              // Read an item from the array
```
```
bat[4];                                        // Get the 4th (0-indexed) item of "bat"
```
<section style="padding-left: 100px">

<h3> Nested Indexing </h3>
```
<array>[<index>][<index>]...      // Read nested arrays
```
```
zee[1][0];                        // Get the 0th item of the 1st item of "zee"
```

<h3> Scaling </h3>
```
<array>[<index>][<type> <index>]  // Treat the nested array as a <type> array
```
```
bat[4][%1 3]                      // Get the 3rd item of the 4th item of "bat" as an 8-bit array
```
</section>

## Setting
```
<array>[<index>] <- <value>;
```

## Technical details
* Clamped arrays are not aligned to 4bytes. They are identical to C arrays
* All arrays declared in the global scope, are allocated in the data section