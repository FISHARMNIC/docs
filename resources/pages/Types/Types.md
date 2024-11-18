# Types

---

## Integer

```
u32: 32-bit number (int)
u16: 16-bit number (short int)
u8 : 8-bit  number (signed char)
```

## Pointers

```
p32: Pointer to a 32-bit number (int *)
p16: Pointer to a 16-bit number (short int *)
p8 : Pointer to a 8-bit  number (signed char *)
```

## Floating point

```
f32: 32-bit float (float)
```

## Special

```
conststr : Same as p8 but for string literals. Allows for special functionality in printing
string   : Same as constr except for dynamically allocated strings
array    : Same as `p32:dynamic` except quicker notation. Value should be allocated dynamically
array16  : Same as above but `p16:dynamic`
array8   : Same as above but `p8:dynamic`

any     : Accepts any 32-bit type without warning
smart   : !! Still in development !!
```

## Type annexes
Types can be annexed with a colon to provide further information about the type. The currently supported annexes are as follows
```
type:borrowed  : Converts a dynamic type to a static, removes the need for memory borrowing
type:array     : Converts a type to a dynamic. If the type is already dynamic, it makes the elements dynamic
type:dynamic   : Similar to type array, but doesn't convert type to pointer
type:reference : Similar to c++ pass by reference, allows for modifying original value of parameter being passed
```

## Formats
After declaring a format, the name of the format can now be used as a regular type. See `formats`.
