# Formats as classes

---

## Prefix
All of the methods and constructors that are declared as part of a format are not actual properties of the structure. This means that they do not take up space in the structure. Additionally, all methods and constructors should be declared after all properties have been declared.

For all examples, suppose we are inside of a format declaration as so:
```
Person format
{
    .age u32;
    .name p8;
    <ALL FOLLOWING METHODS AND CONSTRUCTORS GO HERE>
}
```

## `this` 

`this` can be used inside of methods and constructors as a reference to the instance that is calling it. Modifiying any of the properties of `this` will result in the modification of the instance that called it.

It's important to note that `this` is a dynamic type by default. Do *NOT* assign `this` to another variable without using `borrow` (unless you know what you're doing). If you are confused, it is explained [here](/docs/Dynamics/explanation.md). 

## Constructors

<section style="padding-left: 100px">

<h3> Creating </h3>

```
.<format> constructor<<type><parameter>,<type><parameter>>
{
    ...
}
```
```
/* Simple constructor demo. Notice how nothing is returned.
.Person constructor<u32 inAge, p8 inName>
{
    this.age <- inAge;
    this.name <- inName;
}
```
<h3> Calling </h3>

```
<format>(<parameters>);    // Notice the use of parenthesis instead of angle brackets
```
```
Person(17, "Nico")
```

<h3> Note </h3>

After a constructor is created, you can still create an instance by using the normal way of instancing formats. Any format instance using the structure instance has no different properties than that of one using the class instance. This means that if an instance was created using the structure instance, you can still use all of the same methods.
</section>

## Methods
<section style="padding-left: 100px">
```
.<name> method<<arguments>> -> <return> 
{
    // ...
}
```
```
.toString method<> -> string 
{
    create out <- "Hello! My name is " + this.name + " and I am " + this.age + " years old.";
    return out;
}
```
</section>

### Special Methods
The only availible special method so far is `toString`, which is automatically called when using `print_` 


## Operator overloads
<section style="padding-left: 100px">
Overloads can be used to modify how different operators work. The current supported operators are:  
| NAME      | REPLACES              |  
|-----------|-----------------------|  
| add       | : (instance + a)      |
| sub       | : (instance - a)      |
| mul       | : (instance * a)      |
| div       | : (instance / a)      |
| index_set | : (instance[a] <- b;) |
| index_get | : (instance[a])       | 
| shl       | : (instance << a)     |
| shr       | : (instance >> a)     |

```
.<format> operator(<name>)<<type><a>,(only for index_set)<type><b>> -> <return>
{
    ...
}
```
```
.Person operator(add)<u32 num> -> u32
{
    return(this.age + num);
}
```
</section>

## Declaring formats from different files
To do a forward declaration, add `forward` before every method, operator, and constructor. Do not add `forward` to properties
```
Something format
{
    .propA u32;
    .propB string;

    forward .Person constructor<>;
    forward .toString method<> -> string;
    // etc.
}
```

## Final example
```
Person format
{
    .age u32;
    .name p8;

    .Person constructor<u32 inAge, p8 inName>
    {
        this.age <- inAge;
        this.name <- inName;
    }

    .toString method<> -> string 
    {
        create out <- "Hello! My name is " + this.name + " and I am " + this.age + " years old.";
        return out;
    }
    
    .Person operator(add)<u32 num> -> u32
    {
        return(this.age + num);
    }
}

entry function<> -> u32 
{
    /* 
    The following two lines produce an identical format instance in terms of their inner workings. 
    (Their values are different though)
    */
    create me <- Person(18, "Nico");           /* Class instance */
    create dad <- Person<age:60, name:"Dad">;  /* Structure instance */

    /* This means that methods can be called from both */
    print_(me);
    print_(dad);

    /* Overloading "+"
        Note that if joining with a string, it will call toString instead
        So in this, there is parenthesis around the statement to ensure that it adds the number first
    */
    print_("I will be " + (me + 1) + " years old in 1 year.");
}
```