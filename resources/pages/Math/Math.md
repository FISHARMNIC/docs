# Math

---
All math must be done inside of a parenthesis. This ensures proper evaluation  

Currently, there is only proper order of operations for integer math, but it will be added for float math very soon.

If there are no floating points (neither variables nor literals), then the compiler will automatically use integer math.
```
/*
 * Here, the function "factorial" returns a u32
 * By using "1.0" instead of just "1", that tells the compiler to calculate with float math
 * Additionally, the second parenthesis ensures that the division will happen first
*/
create jon <- (sum + (1.0 / (factorial(sum_index))));
```