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

## Constructors

<section style="padding-left: 100px">

<h3> Creating </h3>

```
.<format> constructor<<parameters>>
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
```
.<name> method<<parameters>> -> <return> 
{
    ...
}
```
```
.print method<> -> u32 
{
    printf("Hello! My name is %s and I am %i years old.", this.name, this.age);
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

    .print method<> -> u32 
    {
        printf("Hello! My name is %s and I am %i years old.", this.name, this.age);
    }
}

entry function<> -> u32 
{
    /* 
    The following two lines produce an identical format instance in terms of their inner workings. 
    (Their values are different though)
    */
    create me <- Person(17, "Nico");                  /* Class instance */
    create awsomePerson<- Person<age:17, name:"Nina"> /* Structure instance */

    /* This means that methods can be called from both */
    me.print();
    awesomePerson.print();
}
```