/**
 * Krishna Bhattarai
 * Last updated - April 27, 2022
 * This is a javascript library for people that like python.
 * The requirements for this js library is that you import underscore.js first like this (if you are using this in a browser)
 * <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
 * after that, you can enjoy a pythonic programming experience.
 */

(function () {
	let self = this

	self._ = _

	self.print = function (...message) {
		console.log(...message)
	}

	self.pprint = function (some_object) {
		self.print(self.pprintr(some_object))
	}

	self.pprintr = function (some_object) {
		return JSON.stringify(some_object, null, 2)
	}

	self.log = function (...message) {
		message.unshift(self.timestamp())
		message.splice(1, 0, "::==>")
		self.print(...message)
	}

	self.type = function (some_object) {
		return typeof some_object
	}

	self.abs = function (some_object) {
		return Math.abs(some_object)
	}

	self.pow = function (x, y) {
		return Math.pow(x, y)
	}

	self.sum = function (list) {
		return list.reduce(function (a, b) {
			return a + b;
		}, 0);
	}

	self.max = function (list) {
		return Math.max(...list)
	}

	self.min = function (list) {
		return Math.min(...list)
	}

	self.len = function (some_object) {
		return some_object.length
	}

	self.avg = function (list) {
		return self.sum(list) / self.len(list)
	}

	self.mean = function (list) {
		return self.avg(list)
	}

	self.range = function (list) {
		return self.max(list) - self.min(list)
	}

	self.mode = function (list) {
		return list.sort(function (a, b) {
			return list.filter(function (v) {
				return v === a;
			}).length - list.filter(function (v) {
				return v === b;
			}).length;
		}).pop();
	};

	self.sorted = function (list, order) {
		return order !== "desc" ? list.slice().sort(function (a, b) {
			return a - b
		}) : self.reversed(list.slice().sort(function (a, b) {
			return a - b
		}))
	}

	self.sorteds = function (some_object, order) {
		return order !== "desc" ? some_object.slice(0).sort() : self.reversed(some_object.slice(0).sort())
	}

	self.flatten = function (lists) {
		return lists.reduce(function (a, b) {
			return a.concat(b);
		}, []);
	}

	self.str = function (some_object) {
		return some_object.toString()
	}

	self.int = function (some_string) {
		return parseInt(some_string)
	}

	self.float = function (some_string) {
		return parseFloat(some_string)
	}

	self.timestamp = function () {
		return new Date().toISOString()
	}

	self.keys = function (some_object) {
		return Object.keys(some_object)
	}

	self.values = function (some_object) {
		return Object.values(some_object)
	}

	self.empty = function (some_object) {
		return _.isEmpty(some_object)
	}

	self.isnull = function (some_object) {
		return _.isNull(some_object)
	}

	self.isundefined = function (some_object) {
		return _.isUndefined(some_object)
	}

	self.equals = function (x, y) {
		return _.isEqual(x, y)
	}


	self.first = function (some_array) {
		return some_array[0]
	}

    // List methods
    self.append = function(some_array, items){
        return some_array.push(items)
    }

	self.extend = function (destination, source) {
		return _.extend(destination, source)
	}

    self.insert = function(some_array, index, item){
		some_array.splice(index, 0, item)
    }

    self.remove = function (some_object, item) {
		return _.without(some_object, item)
	}

	self.copy = function (some_object) {
		return Array.isArray(some_object) ? some_object.slice() : Object.assign({}, some_object)
	}

	self.pop = function(some_array, index){
		return some_array.splice(index, 1)[0]
	}

	self.clear = function(some_list){
		some_list = []
		some_list.length = 0;
		some_list.splice(0, some_list.length);
		return some_list;
	}

	self.index = function (some_object, item) {
		return some_object.indexOf(item)
	}

	self.count = function(some_object, item){
		return some_object.filter(match => match === item).length
	}

	self.reversed = function (array) {
		return array.slice().reverse()
	}
	// END OF LIST METHODS


	self.last = function (array) {
		return _.last(array)
	}



	self.difference = function (a, b) {
		return _.difference(a, b)
	}

	self.union = function (...lists) {
		return _.union(...lists)
	}

	self.intersection = function (...lists) {
		return _.intersection(...lists)
	}

	self.unique = function (list) {
		return _.uniq(list)
	}

	self.without = function (list, ...values) {
		return _.without(list, ...values)
	}

	self.base = function (number, base) {
		return number.toString(base)
	}

	self.xrange = function (a, b, n) {
		return _.range(a, b, n)
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
		return _.invert(object)
	}

	self.random = function (min, max) {
		return _.random(min, max)
	}

	self.round = function (item) {
		return Math.round(item)
	}
}());