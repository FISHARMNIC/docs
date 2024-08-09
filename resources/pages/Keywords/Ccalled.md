# Keyword: `__ccalled__`

---

`__ccalled__` specifies that the function will be called from C. By default, HAM` optimizes if registers should be saved before a function call. Without this, any registers that should be preserved by the callee might not be, result in undefined behavior.

In order to use this keyword, place it before a function declaration.

```
__ccalled__ doSomething function<> -> u32
{
    printf("Something\n");
}
```