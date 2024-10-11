# Keyword: `borrow`

---

Borrow can be used during the assignation of a dynamic reference. It forces the data pointer to be copied without ownership being transfered to it.

The following code is an example method that would be inside a Linked-list format called `Linked`. The `borrow` on the third line is needed as `this` is a dynamic reference that is owned by `linkedInstance`. If `borrow` was not used, the ownership would be transfered to `reference`, and `linkedInstance` would no longer own the data.  

On the first line, `findLast` is returning a borrowed variant of `Linked`. This is an example of type annexing which can be read about [here](/docs/Types/Types.html). In short, reading / setting a variable to the value that it returns will not claim ownership over that data.
```
.findLast method<> -> Linked:borrowed
    {
        create reference <- borrow this;
        while(reference.next != 0)
        {
            reference <- reference.next;
        }
        return reference;
    }

...

create linkedInstance <- Linked(123);
```