
// The charCodeAt() method returns the numeric Unicode value of the character at the given index (except for unicode codepoints > 0x10000).

// str.charCodeAt(index);

// Description
// Unicode code points range from 0 to 1114111 (0x10FFFF). The first 128 Unicode code points are a direct match of the ASCII character encoding. For information on Unicode, see the JavaScript Guide.

// Note that charCodeAt() will always return a value that is less than 65536. This is because the higher code points are represented by a pair of (lower valued) "surrogate" pseudo-characters which are used to comprise the real character. Because of this, in order to examine or reproduce the full character for individual characters of value 65536 and above, for such characters, it is necessary to retrieve not only charCodeAt(i), but also charCodeAt(i+1) (as if examining/reproducing a string with two letters). See example 2 and 3 below.

// charCodeAt() returns NaN if the given index is less than 0 or is equal to or greater than the length of the string.

// Backward compatibilty: In historic versions (like JavaScript 1.2) the charCodeAt() method returns a number indicating the ISO-Latin-1 codeset value of the character at the given index. The ISO-Latin-1 codeset ranges from 0 to 255. The first 0 to 127 are a direct match of the ASCII character set.


'ABC'.charCodeAt(0); // returns 65