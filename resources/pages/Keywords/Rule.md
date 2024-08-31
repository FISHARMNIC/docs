# Keyword: `__rule`

---

The `__rule` keyword can be used to set certain flags in the compiler. 

```
__rule <name> <boolean>

```
The following are currently defined and can either be set to `true` or `false`:

### DynamicArraysAllocateSize
default: `true`

Determines whether dynamically allocated arrays also store their size or not. This size is accessible by reading an int from the byte before the array address.

### StaticArraysAllocateSize
default: `false`

Determines whether statically allocated arrays also store their size or not. This size is accessible by reading an int from the byte before the array address

### hasUsedMmap
default: `false`

Tells the compiler whether to link the allocation library. This is useful if you have a linked C file that uses the `__allocate__` function.

### defaultTransience
