https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

The RegExp constructor creates a regular expression object for matching text with a pattern.

/pattern/flags
new RegExp(pattern[, flags])

Parameters

pattern
The text of the regular expression.
flags
If specified, flags can have any combination of the following values:

g
global match
i
ignore case
m
multiline; treat beginning and end characters (^ and $) as working over multiple lines (i.e., match the beginning or end of each line (delimited by \n or \r), not only the very beginning or end of the whole input string)
u
unicode; treat pattern as a sequence of unicode code points
y
sticky; matches only from the index indicated by the lastIndex property of this regular expression in the target string (and does not attempt to match from any later indexes).

Description
There are 2 ways to create a RegExp object: a literal notation and a constructor. To indicate strings, the parameters to the literal notation do not use quotation marks while the parameters to the constructor function do use quotation marks. So the following expressions create the same regular expression:

/ab+c/i;
new RegExp('ab+c', 'i');
new RegExp(/ab+c/, 'i');

var re = /(\w+)\s(\w+)/;
var str = 'John Smith';
var newstr = str.replace(re, '$2, $1');
console.log(newstr);
// This displays "Smith, John".

var text = 'Some text\nAnd some more\r\nAnd yet\rThis is the end';
var lines = text.split(/\r\n|\r|\n/);
console.log(lines); // logs [ 'Some text', 'And some more', 'And yet', 'This is the end' ]

var s = 'Please yes\nmake my day!';
s.match(/yes.*day/);
// Returns null
s.match(/yes[^]*day/);
// Returns 'yes\nmake my day'

Extracting sub-domain name from URL

var url = 'http://xxx.domain.com';
console.log(/[^.]+/.exec(url)[0].substr(7)); // logs 'xxx'

function convert(str) {

    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

}

convert("Dolce & Gabbana");