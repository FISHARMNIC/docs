# Declaring Functions

---

## Declaration
```
<name> function<<type> <parameter>, <type> <parameter>> -> <return>
{

}
```
```
myFunction function<u32 a, u32 b> -> u16
{
    // ... code
}
```
## Variadics
Variadics are declared by adding an ellipsis as the last parameter
```
someFunction function<u32 a, ...> -> u16
{
    // ... code
}
```
In order to read the arguments, you can use
```
__arguments[<index>]
```
However, this array is based at the start of all parameters. This means that if your variadic arguments begin at parameter number two (as in the example `someFunction` above), then you want to start reading from address 1.