# Variables

---
## Creating
```
create <name> <- <value>;        // Given value with implicit type
create <type> <name> <- <value>; // Given value with explicit type
create <type> <name>;            // Unspecified value (default 0) with explicit type
```
```
create foo <- 123;               // Create "foo" with the value "123" as a u32
create u16 bar <- 456;           // Create "bar" with the value "456" as a u16
create p8 bat;                   // Create "bat" with the value "0" as a p8
create jon <- u8:(123);          // See casting
```
## Setting
```
<name> <- <value>;
```
```
foo <- 789;
```