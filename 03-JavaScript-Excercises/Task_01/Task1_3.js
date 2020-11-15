function evens (A) {
   var evens = A.filter(n => n%2 == 0)

   A = [];

   for (var i = 0; i < evens.length; i++) {
      A.push(evens[i]);
   }

   return A;
}
