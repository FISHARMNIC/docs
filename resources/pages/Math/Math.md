# Math

---
All math must be done inside of a parenthesis. This ensures proper evaluation  

Currently, there is no order of operations for mathematical statements. However, you can use parenthesis to prioritize operations.

If there are no floating points (neither variables nor literals), then the compiler will automatically use integer math.
```
/*
 * Here, the function "factorial" returns a 32bit number
 * By using "1.0" instead of just "1", that tells the compiler to calculate with float math
 * Additionally, the second parenthesis ensures that the division will happen first
*/
create jon <- (sum + (1.0 / (factorial(sum_index))));
```