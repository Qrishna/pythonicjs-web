/**
 * Krishna Bhattarai
 * www.kbhattarai.com
 * July 2018
 * A js library for people that like python
 * Updated - Nov 2023
 */


(function () {
    let self = this

    self.print = function (...message) {
        console.log(...message)
    }

    self.pprint = function (object) {
        self.print(self.pprintr(object))
    }

    self.pprintr = function (object) {
        return JSON.stringify(object, null, 2)
    }

    self.log = function (...message) {
        message.unshift(self.timestamp())
        message.splice(1, 0, "::==>")
        self.print(...message)
    }

    self.type = function (object) {
        if (Array.isArray(object)) {
            return 'array'
        }
        return typeof object
    }

    self.abs = function (object) {
        return Math.abs(object)
    }

    self.pow = function (x, y) {
        return Math.pow(x, y)
    }

    self.sum = function (list) {
        if (!Array.isArray(list)) {
            throw new Error('Input must be an array');
        }
        return list.reduce(function (a, b) {
            return a + b;
        }, 0);
    }

    self.max = function (list) {

        if (!Array.isArray(list) || list.length === 0) {
            throw new Error('Input must be a non-empty array');
        }
        return Math.max(...list)
    }

    self.min = function (list) {
        if (!Array.isArray(list) || list.length === 0) {
            throw new Error('Input must be a non-empty array');
        }
        return Math.min(...list)
    }

    self.len = function (object) {
        if (typeof object !== 'string' && !Array.isArray(object)) {
            throw new Error('Input must be a string or an array');
        }
        return object.length
    }

    self.avg = function (list) {
        if (!Array.isArray(list) || list.length === 0) {
            throw new Error('Input must be a non-empty array');
        }
        return self.sum(list) / self.len(list)
    }

    self.mean = function (list) {
        return self.avg(list)
    }

    self.sorted = function (iterable, key = null, reverse = false) {
        if (self.is_empty(iterable) && type(iterable) === 'array'){
            return []
        }
        const compareFnArray = (a, b) => (reverse ? b - a : a - b);
        const compareFnObject = (a, b) => (reverse ? b.localeCompare(a) : a.localeCompare(b))

        if (Array.isArray(iterable)) {
            if (typeof iterable[0] === 'number') {
                return [...iterable].sort(compareFnArray);
            } else if (typeof iterable[0] === 'object') {
                return [...iterable].sort((a, b) => compareFnObject(key ? key(a) : a, key ? key(b) : b));
            }
        } else if (typeof iterable === 'object' && iterable !== null) {
            const sortedKeys = Object.keys(iterable).sort((a, b) => compareFnObject(a, b));
            return sortedKeys.reduce((result, k) => ({...result, [k]: iterable[k]}), {});
        }
        throw new Error('Unsupported iterable type');
    }

    self.flatten = function (list) {
        return list.reduce((acc, current) => acc.concat(Array.isArray(current) ? self.flatten(current) : current), []);
    }

    self.is_array = function(some_object){
        return self.type(some_object) === 'array'
    }

    self.str = function (object) {
        return object.toString()
    }

    self.int = function (string) {
        return parseInt(string)
    }

    self.float = function (string) {
        return parseFloat(string)
    }

    self.timestamp = function () {
        return new Date().toISOString()
    }

    self.keys = function (object) {
        return Object.keys(object)
    }

    self.values = function (object) {
        return Object.values(object)
    }

    self.copy = function (object) {
        return Array.isArray(object) ? object.slice() : Object.assign({}, object)
    }

    self.deepcopy = function (object) {
        return JSON.parse(JSON.stringify(object));
    }

    self.is_empty = function (object) {
        return keys(object).length === 0;
    }

    self.not = function (object) {
        if (object === null) {
            return true
        } else if (((type(object) === "object") || (type(object) === "array"))) {
            return self.is_empty(object)
        }
        return !object;
    }

    self.is_null = function (object) {
        return object === null;
    }

    self.is_undefined = function (object) {
        return typeof object === 'undefined';
    }

    self.equals = function (a, b) {
        const sortedStringify = (obj) => JSON.stringify(obj, Object.keys(obj).sort());
        return sortedStringify(a) === sortedStringify(b);
    }

    self.index = function (object, item) {
        return object.indexOf(item)
    }

    self.first = function (array) {
        return array[0]
    }

    self.last = function (array) {
        return array[len(array) - 1]
    }

    self.remove = function (array, item) {
        // remove all instances of item from object and returns new object
        return array.filter(element => element !== item);
    }

    self.difference = function (a, b) {
        // returns a new array with elements in array 'a' but not in array 'b'
        return a.filter(element => !b.includes(element));
    }

    self.union = function (...lists) {
        return [...new Set(lists.flat())];
    }

    self.intersection = function (...lists) {
        // Using reduce to find the common elements in all arrays
        return [...new Set(lists.reduce((common, list) => common.filter(value => list.includes(value))))];
    }

    self.unique = function (list) {
        return [...new Set(list)]
    }

    self.without = function (list, ...values) {
        return list.filter(item => !values.includes(item));
    }

    self.base = function (number, base) {
        return number.toString(base)
    }

    self.range = function (a, b, n = 1) {
        if (arguments.length === 1) {
            b = a;
            a = 0;
        }
        return Array.from({length: Math.ceil((b - a) / n)}, (_, i) => a + i * n);
    }

    self.reversed = function (array) {
        return array.slice().reverse()
    }

    self.filter = function (operation, array) {
        return array.filter(operation)
    }

    self.hex = function hex(a) {
        return "0x" + (a >>> 0).toString(16)
    }

    self.map = function (operation, array) {
        return array.map(operation)
    }

    self.getattr = function (obj, name) {
        return obj[name]
    }

    self.setattr = function (obj, name, value) {
        obj[name] = value
    }

    self.hasattr = function (obj, name) {
        return name in obj
    }

    self.invert = function (object) {
        return Object.entries(object).reduce((acc, [key, value]) => {
            acc[value] = key;
            return acc;
        }, {});
    }

    self.random = function (min, max) {
        if (typeof min !== 'number' || typeof max !== 'number') {
            throw new Error('Inputs must be numbers');
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    self.round = function (number, ndigits = null) {
        return ndigits === null ? Math.round(number) : Math.round(number * 10 ** ndigits) / 10 ** ndigits;
    }
}());

