# Function overloads

---

Currently, function overloads are only supported on functions, constructors, and operators, but NOT methods. 


## Supportive overloads
If you have two functions that *appear* to do the same thing, then you can do a supportive overload. This is useful because it can remove code duplication on your end.

Below is an example and the proper syntax. Supportive overloads also work for constructors and operators, and will work for methods once they support overloads.

```
add function supports (
    <u32 a, u32 b>       -> u32,
    <f32 a, f32 b>       -> f32,
    <string a, string b> -> string,
)
{
    return(a + b);
}

entry function<> -> u32
{
    print_(add(123,456));
    print_(add(1.23,4.56));
    print_(add("123","456"));
}
```

Notice that in this example, the assembly isn't actually the same, however to you it appears the same.