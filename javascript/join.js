// str = arr.join([separator = ','])

// separator

// Optional. Specifies a string to separate each element of the array. The separator is converted to a string if necessary. If omitted, the array elements are separated with a comma. If separator is an empty string, all elements are joined without any characters in between them.

var a = ['Wind', 'Rain', 'Fire'];
var myVar1 = a.join();      // assigns 'Wind,Rain,Fire' to myVar1
var myVar2 = a.join(', ');  // assigns 'Wind, Rain, Fire' to myVar2
var myVar3 = a.join(' + '); // assigns 'Wind + Rain + Fire' to myVar3
var myVar4 = a.join('');    // assigns 'WindRainFire' to myVar4