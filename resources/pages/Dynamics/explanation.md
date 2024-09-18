# Dynamics

---

Memory allocation/deallocation is done automatically by HAM. In order to do this, it uses a [garbage collection system](https://github.com/FISHARMNIC/RollCall) (called RollCall) that I designed. Shortly explained, all data that has been allocated via RollCall can only have one owner at a time. If at any point that owner looses its reference, the data is now free to be collected.  

A `dynamic type` is any form of data that has been allocated via RollCall. All Dynamics are supersets of normal types and format types, meaning that you can turn any type into a dynamic. This is done by writing `TYPE:dynamic`, such as `p8:dynamic` (also known as the `array8` type). If you want the *elements* of an array to be dynamic, do `TYPE:dynamicChildren`. 

When you do something such as create a new instance of an array or format, that data automatically turned into a dynamic type.

In HAM, ownership assignation is automatic. This means that setting any variable to any data that is a dynamic type will remove that old variables ownership and give it to the new one. Below is an example of this.

```
// Inside of some function...
create bob <- {1,2,3}; // bob is now of type p32:dynamic
create jon <- bob;     // bob no longer owns the data. jon does now.
```

This can be circumvented by using the keyword `borrow`, which is explained [here](/docs/Keywords/Borrow.html). Borrow simply copies the reference without transferring ownership to the new variable.