# Library: `x11`

---
This "library" is more of a compatibility layer for Xlib. It simplifies it a lot and allows you to draw shapes and get user input. To use the graphics library, write:
```
# include sys x11
```
## Create an event function
The event function must take one parameter of type u32, and be declared as `__ccalled__`. The return type does not matter. This is called whenever an event is trigged inside of the x11 window. The active listeners are listed below, however more can be added by modifying the function `XSelectInput` in `compiler/libs/gfx/gfx.c` (recompilation required):
```
ExposureMask
KeyPressMask
PointerMotionMask
ButtonPressMask
ButtonReleaseMask
```
When the event function is called, the parameter will be set to a certain event number. Instead of knowing the number, there are a set of macros which can be used to identify the event. Most of them are just the names of the event masks without the word `mask`. Here are two examples that correspond to the mouse down/up events:
```
ButtonPress
ButtonRelease
```
Here is an example event function prototype:
```
__ccalled__ trigger function<u32 event> -> u32;
```

## Setting up the window
Before doing anything else, you must run this function to setup the connection to the XServer
```
gfx_setup(<u32 width>, <u32 height>);
```
And then you can map the window by calling
```
gfx_begin(<function pointer>);
```
This parameter expects the pointer to the event function explained above

## Display functions
```
// All parameters are of type u32
gfx_clear();
gfx_draw_rect(x,y,w,h);
gfx_draw_arc(x,y,r,a1,a2);
```

## Input variables
```
u32 gfx_mouse_x;
u32 gfx_mouse_y;
u32 gfx_mouse_button;
u32 gfx_keypress_keycode;
u8 gfx_keypress_key;
```
## Compiling
See the [tutorial](/docs/Examples/HowTo.html) and check under `Running (graphics)` on how to compile correctly
## Example code
This code places a square at the users mouse that grows and shrinks when clicked
```
/* Assemble with scripts/lima_x11.sh */

#include sys x11

create size <- 20;
__ccalled__ render function<u32 event> -> u32
{
    gfx_clear();
    if(event == ButtonPress)
    {
        size <- (size + 10);
        gfx_mouse_x <- (gfx_mouse_x - 5);
        gfx_mouse_y <- (gfx_mouse_y - 5);
    } 
    elif(event == ButtonRelease)
    {
        size <- (size - 10);
        
    }
    gfx_draw_rect((gfx_mouse_x - 10),(gfx_mouse_y - 10),size,size);
}

entry function<> -> u32
{
    gfx_setup(500, 360);
    gfx_begin($render);
}
```