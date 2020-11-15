function filterArray(A) {
    var outputArr = A.filter(x => {return x % 3 === 0 ? true : false});
 
    return outputArr;
}

var outputArr = filterArray(A);