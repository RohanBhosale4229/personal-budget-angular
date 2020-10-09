
# entries

A generator for iterating object key:value entries.

Requires Node 4 or higher and best enjoyed with 6.

### Usage

Below example using Node 6.

```javascript
const entries = require('entries');

const obj = {
    a: 1,
    b: 2
};

for (let [key, value] of entries(obj)) {
    console.log(`${key}:${value}`);
}

//=> a:1
//=> b:2
```
