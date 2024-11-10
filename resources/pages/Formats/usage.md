# Formats as structures

---

## Creating
```
<name> format {
    .<property> <type>;
    .<property> <type>;
    ...
}
```
```
Person format {                                // Create a new format named "Person"
    .name p8;                                  // Create a new property "name" as a string
    .age u32;                                  // Create a new property "age" as a u32
}
```
Note that types do not have to be specified. If no type is given, it will assume the first type that is given to it (see classes if you are confused on the example below)
```
Person format
{
    .name;
    .age;

    .Person constructor<string n, u32 age> -> u32
    {
        this.name <- n; /* set "name" to be a string */
        this.age <-  age; /* set "age" to be a u32 */
    }
}
```
## Instancing
```
<name><<property>:<value>,<property>:<value>>  // Note: the second "<>" should be written
```
```
Person<name:"Nico",age:17>                     // Create a new instance of Person with the name "Nico" and age 17
```
## Assignation
Assignation can be done in the same way as an array
```
create human <- Person<name:"Nico",age:17>;
```
```
create human Person;                           // Create a pointer 
...
human <- Person<name:"Nico",age:17>;           // Assign the format to the pointer
```
## Accessing
```
<instance>.<property>
```
```
human.name                                     // Returns property "name" of "human" (Nico)
```
## Modification
```
<instance>.<property> <- <value>;
```
```
human.age <- 100;                              // Makes "age" of "human" 100
```
## Nesting
Format nesting is supported. In order to do this, the child must be declared before the parent. See this example:
```
Person format
{
    .age u32;
    .name p8;
}

Student format
{
    .info Person; /* declare "info" as a "Person"
    .id u32;
}


entry function<> -> u32
{
    /* To create a nested instance, look at the following line */
    create bob <- Student<id:123,info:Person<age:15,name:"bob">>;

    /* Reading and writing nested properties can be done with consecutive periods. */
    bob.info.age <- 16;
    printf("The student %s (id #%i) is %i years old\n", bob.info.name, bob.id, bob.info.age);
}
```
## Technical details

--
All formats are packed.