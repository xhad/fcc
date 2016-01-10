function myReplace(str, before, after) {

// make an object from str and locate the index of before
  var index = str.indexOf(before);
// check for capitalization
  if (str[index] === str[index].toUpperCase()) {
    // capitalize after
      after = after.charAt(0).toUpperCase() + after.slice(1);
      }
  // replace before with after
    str = str.replace(before, after);
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");