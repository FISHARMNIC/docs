# Keyword: `borrow`

---

Borrow can be used using the asignation of a dynamic reference. It forces the data pointer to be copied without ownership being transfered to it.

The following code is an example method that would be inside a Linked-list format called `Linked`. The `borrow` on the third line is needed as `this` is a dynamic reference that is owned by `linkedInstance`. If `borrow` was not used, the ownership would be transfered to `reference`, and `linkedInstance` would no longer own the data.
```
.findLast method<> -> Linked
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