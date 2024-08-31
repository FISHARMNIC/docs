# Keyword: `return_new`

---

The keyword `return_new` can be used to return reference to a new allocation without the worry of having it be destroyed by the garbage collector. Only use it if you are creating and returning the data on the same line

Good example
```
bob function<> -> p32
{
    return_new({1,2,3});
}
```

Bad example
```
bob function<> -> p32
{
    // Not creating the data on this line
    create jon <- {1,2,3};
    return_new(jon);
}
```