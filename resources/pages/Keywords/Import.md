# Keyword: `import`

---

The `import` keyword is equivalent of the C `extern`. Use it before a variables declaration to ensure that the compiler knows to not define it locally. All imported variables must be given a type.

```
import u32 gfx_mouse_x;
```