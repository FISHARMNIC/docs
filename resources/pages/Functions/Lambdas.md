# Lambda Functions

---

## Declaration
```
lambda<params> -> <return> (optional)
{
    ...
}
```

## Calling
Lambdas can be called in several ways
* Assigning a lambda to a variable then calling it
* Passing it to a function

If you wish, you can specify a return type when you call it by using the arrow notation

```
create someFunc <- lambda<> {print_("hello!");};
someFunc();

create otherFunc <- lambda<u32 a> {
    return(a * 10);
}

print_(otherFunc() -> u32);
```


## Captures
Lambdas capture all availible variables by reference (except `this`) at the location where they are written

```
doSomething function<fn func>
{
    func(123);
}

entry function<>
{
    create a <- 10;
    doSomething(
        lambda<u32 b>
        {
            a <- a + b;
        }
    )
    print_(a); // should be 123 + 10 = 133
}
```