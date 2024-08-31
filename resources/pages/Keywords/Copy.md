Keyword: `copy`

---

The keyword `copy` can be used to copy allocated data. It can be used on any data that was dynamically. It is called like a function.

```
entry function<> -> u32
{
    create arr <- {1,2,3};
    create bob <- copy(arr);
    bob[1] <- 4;

    // bob[1] != arr[1]
    printf("%i %i \n", bob[1], arr[1]);
}
```