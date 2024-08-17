# Math Details

---

In case anyone was interested, the floating point computations are done using SSE instructions. Additionally, C unfortunately promotes all floats to doubles in their version of variadic arguments. This means that I needed some trickery to get printf to work correctly with floats. Basically this compiler will actually promote it to a double in the event that you pass a float to printf.