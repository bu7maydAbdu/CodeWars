


//solution:

function first(arr, n=1) {
    return arr.slice(0,n);
 }


 //another solution:

 function first(arr, n) {
    return n === undefined ? arr.slice(0, 1) : arr.slice(0, n);
  }