function pair(str) {
   var dna = [];
   str.split('').forEach(pairFixer);
   console.log(dna);

   function pairFixer(element, index, array) {
      var newPair = element.split(' ');

      switch (element) {
         case 'C':
            newPair.push('G');
            break;
         case 'G':
            newPair.push('C');
            break;
         case 'A':
            newPair.push('T');
            break;
         case 'T':
            newPair.push('A');
            break;
      }
      return dna.push(newPair);
   }
}

pair("GCG");
