# String math

---

In HAM', strings can be added together with "+" using the built in `strjoinmany` function. Any numbers (floats, ints, and pointers) will automatically be converted into strings and added with the string using the built in `ftos` and `itos` functions. Any format instance will be attempted to be convert into a string using their toString method. If one doesn't exist, and error will be thrown. 

```
/* Example format with a "toString" method */
User format
{
    .name string;
    .ID u32;

    .toString method<> -> {
        return(this.name + this.ID);
    }
}

entry function<> -> u32
{
    create me <- User<name:"Nico",ID:123>;

    create awesomePerson <- "Nina";
    create age <- 123.456;

    create out <- "Hello " + me + " and " + awesomePerson + "! I am " + age + " years old.";

    /* Hello Nico123 and Nina! I am 123.456 years old. */
    printf("output: %s\n", out);

    return 0;
}
```