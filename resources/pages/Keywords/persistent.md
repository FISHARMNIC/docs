# Keyword: `persistent`

---
The `persistent` keyword is used to force an allocation to be accesible on the global scope. It is only applicable in inside of a function, and can be used before any thing that needs to be allocated. This includes `arrays` and `formats`. Everything that is allocated using `persistent` needs to be freed using `destroy`.
```
genArrs function<> -> p32
{
    /* return a global array */
    create rarr <- persistent {1,2,3};
    return rarr;
}

entry function<> -> p32
{   
    create result <- genArrs();
    printf("%i\n", result[1]);

    /* make sure to free the array */
    dispose(result);
    return 0;
}
```