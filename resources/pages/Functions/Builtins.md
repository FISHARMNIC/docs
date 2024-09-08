# Built in Functions

---

* `strjoinmany function<u32 number, ...> -> string`
    * Joins `number` strings and returns a new dynamic string
* `ftos function<f32 float> -> string`
    * Converts `float` to a new dynamic string and returns it
* `ftos function<u32 number> -> string`
    * Converts `number` to a new dynamic string and returns it
* `print_ function<any value> -> none`
    * !! STILL IN DEVELOPMENT !!
    * Automatically prints any type x
    * Working:
        * `string`
        * Any format instace. Calls `.toString`
* `println_ function<any value> -> none`
    * !! STILL IN DEVELOPMENT !!
    * Identical to `print_` but adds new line at the end 
* `copy`
    * See [here](../Keywords/Copy.html)
* `printf`
    * Standard c printf