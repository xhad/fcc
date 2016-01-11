// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// tool used 

// Global Object
// Object.hasOwnProperty()
// Object.keys()

function where(collection, source) {
   var arr = Object.keys(source);
   return collection.filter(function(obj) {
         return arr.every(function(key) {
            return obj.hasOwnProperty(key) && obj[key] === source[key];

         });
      });
   }

   where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
