// The substr() method returns the characters in a string beginning at the specified location through the specified number of characters.

// Parameters

// start
// Location at which to begin extracting characters. If a negative number is given, it is treated as strLength + start where strLength is the length of the string (for example, if start is -3 it is treated as strLength - 3.)
// length
// Optional. The number of characters to extract.

var str = 'abcdefghij';

console.log('(1, 2): '   + str.substr(1, 2));   // '(1, 2): bc'
console.log('(-3, 2): '  + str.substr(-3, 2));  // '(-3, 2): hi'
console.log('(-3): '     + str.substr(-3));     // '(-3): hij'
console.log('(1): '      + str.substr(1));      // '(1): bcdefghij'
console.log('(-20, 2): ' + str.substr(-20, 2)); // '(-20, 2): ab'
console.log('(20, 2): '  + str.substr(20, 2));  // '(20, 2): '