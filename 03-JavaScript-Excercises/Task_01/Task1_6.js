function filterArray(A) {
   var outputArr = A.reduce((value, x) => {return value + x});
 
    return outputArr;
}

var outputArr = filterArray(A);
