# Keyword: `transient`

---

Using `transient` forces data to be allocated on the stack instead of globally. It is only useful if `defaultTransience` is disabed (default). If transient data is allocated, it will be lost at the end of a function.

```
genArrs function<> -> p32
{
    create rarr <- transient {1,2,3};
}
```