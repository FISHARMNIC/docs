# Keyword: `call`

---

In order to call a function, the compiler needs to acknowledge it's existence. This means that one of the following must be true:  
* The function is pre-defined in the compiler
* The function has been declared and compiled
* The function has been defined in a forward declaration
* You are calling from the type `fn`
<br>

If none of these are true however, a function can still be called via a pointer. This pointer can be a direct memory address, a variable, etc. In order to do so, before the function call, you must write `call`. You can also provide a return type (optional) by adding a type after the word `call`.
```
/* 
 * Example function that expects a function as it's third parameter
 * In this case, 'iterator' is a p32. The type doesn't actually matter as long as it holds 32 bits
*/
forEach function<p32 arr, u32 size, p32 iterator> -> u32 {
        create i <- 0;
        while(i <: size)
        {
            /* 
             * Call the iterator and read its return as a u32 
             * The "-> u32" can be taken out, this is just to show
            */
            call iterator(arr[i]) -> u32;
            i <- (i + 1);
        }
        return 0;
    }
```