# pythonicjs-web
A js library for those that like python. 


### Installation
```bash
npm install -g pythonicjs-web@latest
```
### Tests 
```
npx mocha pythonicjs_web_tests.js
```    
Also check the test file to see how to use and test certain functionality

 
### Importing & Using

### In nodejs
```
/** Require*/
require("pythonicjs-web")()
```

### In the browser you can import it like this
```
<script src="https://unpkg.com/pythonicjs-web@latest"></script>
```


# Usage
## Printing
### Syntax: ```print(...message)```
Prints messages to the console.
```
print("Hello", "World");
```
Output
```
Hello World
```

## Pretty Printing
### Syntax: ```pprint(object)```
Prints a prettified JSON representation of the object.
```
const exampleObject = { key: 'value', number: 42 };
pprint(exampleObject);
```
Output
```
{
  "key": "value",
  "number": 42
}
```

## Logging
### Syntax: ```log(...message)```
Logs messages to the console with a timestamp.
```
log("This is a log message");
```
Output
```
2023-11-12T16:36:11.004Z ::==> This is a log message
```

## Mathematical Functions
### Syntax: ```abs(object)```
Returns the absolute value of a number.

### Syntax: ```pow(x, y)```
Returns x to the power of y.

### Syntax: ```random(min, max)```
returns a random number between min, max

### Syntax: ```round(number, ndigits)```
rounds the number to n digits


### Syntax: ```sum(list)```
Returns the sum of all elements in the list.

### Syntax: ```max(list)```
Returns the maximum value in the list.

### Syntax: ```min(list)```
Returns the minimum value in the list.

### Syntax: ```len(object)```
Returns the length of the object, it could be string or list 

### Syntax: ```avg(list)```
Returns the average value of the elements in the list.


## List Operations
### Syntax: ```sorted(list, order)```
Sorts a list in ascending or descending order.
```
const ascending = sorted([3, 1, 4, 1, 5, 9]);
const descending = sorted([3, 1, 4, 1, 5, 9], key=null, reverse=true);

const sorted_dict_ascending = sorted( {b:4, p:5, a:1, q:0, c:-1})
const sorted_dict_descending = sorted( {b:4, p:5, a:1, q:0, c:-1}, key=null, reverse=true)

print(ascending)
print(descending)
print(sorted_dict_ascending)
print(sorted_dict_descending)
```
output
```
[ 1, 1, 3, 4, 5, 9 ]
[ 9, 5, 4, 3, 1, 1 ]
{ a: 1, b: 4, c: -1, p: 5, q: 0 }
{ q: 0, p: 5, c: -1, b: 4, a: 1 }

```

### Syntax: ```reversed(array)```
Reverses the order of elements in an array.
```
const reversedArray = reversed([1, 2, 3, 4]);
print(reversedArray)
```
output
```
[4, 3, 2, 1]
```

## Type Cast Operations
### Syntax: ```str(object)```
Converts an object to a string.

### Syntax: ```int(string)```
Converts a string to an integer

### Syntax: ```float(string)```
Converts a string to a float



## Utility Functions
### Syntax: ```timestamp()```
Returns the current timestamp in ISO format.
```
2023-11-12T12:34:56.789Z
```


## Object Functions
### Syntax: ```keys(object)``` 
Returns an array of keys in an object.

### Syntax: ```values(object)``` 
Returns an array of values in an object.

### Syntax: ```copy(object)``` 
Creates a shallow copy of an object or array.

### Syntax: ```deepcopy(object)``` 
Creates a deep copy of an object or array.

### Syntax: ```is_empty(object)``` 
Checks if an object is empty.

### Syntax: ```not(object)``` 
Returns a Boolean - a logical negation of the object, just like in Python. 
Returns true if the object is null or undefined or has length 0 
```
not('')            // true
not ("")           // true

not([])            // true
not({})            // true

not(null)          // true
not(undefined)     // true

not(0)             // true
not(1)             // false
not(-3.5)          // false
not(-0.00000001)   // false
not([1, 2])        // false
not({"a":"b"})     // false
```

### Syntax: ```is_null(object)``` 
Returns a Boolean by checking if an object is null.

### Syntax: ```is_undefined(object)``` 
Returns a Boolean by checking if an object is undefined.

### Syntax: ```equals(object1, object2)``` 
Returns a Boolean by checking if an object is equal to another object

### Syntax: ```index(object, item)``` 
Returns the index of the specified item within the object array.
If the item is not found in the array, it returns -1.

### Syntax: ```first(array)``` 
Returns the first item of the array

### Syntax: ```last(array)``` 
Returns the last item of the array

### Syntax: ```remove(array, item)``` 
Returns a new array with all instances of item removed

### Syntax: ```difference(a, b)``` 
Returns a new array with elements in array 'a' but not in array 'b'

### Syntax: ```union(a, b)``` 
Returns a new array with unique items present in one or more arrays

### Syntax: ```intersection(a, b)``` 
Returns a new array with unique items that are common in both arrays

### Syntax: ```without(list, values)``` 
Returns a new that includes only the elements from the original array that are not present in the values array

### Syntax: ```base(number, base)```
It converts the given number to a string representation in the specified base

### Syntax: ```range(start, end, step )```
Returns an array from start to end in step increments just like the range function in Python
It can be supplied 1 parameter, 2 parameters (start, end), or 3 parameters (start, end, step) 


### Syntax: ```reverse(array )```
Returns an array that is reversed

### Syntax: ```filter(operation, array )```
Filter the elements of the input array based on the condition specified by the operation function. 
The operation function is expected to be a callback function that returns a boolean value

### Syntax: ```hex(a)```
Converts the unsigned decimal number 'a' to its hexadecimal representation with a "0x" prefix

### Syntax: ```map(operation, array )```
applies the provided operation function to each element of the array and returns a new array containing the results.

### Syntax: ```getattr(obj, name)```
retrieves the value of the property with the specified name from the given obj.

### Syntax: ```setattr(obj, name, value)```
sets the value of the property with the specified name to the given value in the provided obj

### Syntax: ```hasattr(obj, name)```
returns a boolean by checking if the specified name is a property in the given obj and 

### Syntax: ```invert(obj)```
returns an object with key and values inverted

### Syntax: ```random(min, max)```
returns a random number between min and max 

### Syntax: ```round(number, ndigits = null)```
rounds the number (to ndigits if supplied)

## To do 
- Categorize functionality a bit better
- write more tests for the functions
- Improve documentation
