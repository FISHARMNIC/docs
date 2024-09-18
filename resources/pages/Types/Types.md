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
string   : Same as p8 except allows for special functionality in printing. Can be dynamically allocated
conststr : Same as str except for string literals
array    : Same as `p32:dynamic` except quicker notation. Value be allocated dynamically
array16  : Same as above but `p16:dynamic`
array8   : Same as above but `p8:dynamic`

any     : Accepts any 32-bit type without warning
smart   : !! Still in development !!
```

## Formats
After declaring a format, the name of the format can now be used as a regular type. See `formats`.