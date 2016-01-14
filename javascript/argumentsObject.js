// About MDN by Mozilla Contributors is licensed under CC-BY-SA 2.5.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments


// https://www.youtube.com/watch?v=IHc9loT6X54

// The arguments object is an Array-like object corresponding to the arguments passed to a function.

// syntax



// arguments

// Description
// The arguments object is a local variable available within all functions. arguments as a property of Function can no longer be used.

// You can refer to a function's arguments within the function by using the arguments object. This object contains an entry for each argument passed to the function, the first entry's index starting at 0. For example, if a function is passed three arguments, you can refer to the argument as follows:

// arguments[0]
// arguments[1]
// arguments[2]

// arguments[1] = 'new value';

// The arguments object is not an Array. It is similar to an Array, but does not have any Array properties except length. For example, it does not have the pop method. However it can be converted to a real Array:

// var args = Array.prototype.slice.call(arguments);

// You should not slice on arguments because it prevents optimizations in JavaScript engines (V8 for example). Instead, try constructing a new array by iterating through the arguments object.


// The arguments object is available only within a function body. Attempting to access the arguments object outside a function declaration results in an error.

// You can use the arguments object if you call a function with more arguments than it is formally declared to accept. This technique is useful for functions that can be passed a variable number of arguments. You can use arguments.length to determine the number of arguments passed to the function, and then process each argument by using the arguments object. (To determine the number of arguments declared when a function was defined, use the Function.length property.)

// Properties

// arguments.callee
// Reference to the currently executing function.
// arguments.caller 
// Reference to the function that invoked the currently executing function.
// arguments.length
// Reference to the number of arguments passed to the function.
// arguments[@@iterator]
// Returns a new Array Iterator object that contains the values for each index in the arguments.

// Examples

// Defining a function that concatenates several strings

// This example defines a function that concatenates several strings. The only formal argument for the function is a string that specifies the characters that separate the items to concatenate. The function is defined as follows:

// function myConcat(separator) {
//   var args = Array.prototype.slice.call(arguments, 1);
//   return args.join(separator);
// }



function printArguments() {
	console.log("Arguments Count = " + arguments.length);
	for (var i =0; i < arguments.length; i++ ) {
		console.log("Arguments " + i + " = " + arguments[i]);
	}
}

printArguments();
printArguments("A", "B");
printArguments(1, 2, 3);


function sortNums () {
	var argsArray = Array.prototype.slice(arguments);
	// 	var argsArray = [].slice(arguments);

	argsArray.sort();
	return argsArray;
}

sortNums(50, 30, 10);