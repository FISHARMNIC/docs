# Casting

---

Note: currently casting does not work between floats and integers. This means that you **cannot** do `f32:(123)` or something of the sort
```
<type>:(<value>)
```
```
p16:(753664)       # casts to a pointer type
```

Values can also be casted to a format type and then used as such

```
create jon <- Person:(<some pointer>);
printf("%i\n", jon.age);
```

## Type Annexes

Type annexes also work on casts

```
something(SomeType:borrowed:(bob));
```

## Autocasting
Autocasting converts types automatically to reduce confusion

Autocasting is done from conststr to string in these scenarios:
* Creating and assigning a variable to a conststr
* Passing a conststr to a function expecting a string
* Creating a conststr array