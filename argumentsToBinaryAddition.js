//case:

// Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

// If your language can handle float binaries assume the array won't contain float or doubles.

// arr2bin([1,2]) == '11'
// arr2bin([1,2,'a']) == '11'
// arr2bin([]) == '0'

// NOTE: NaN is a number too in javascript for decimal, binary and n-ary base



// first sum the elements with reduce method 
// make a ternary conditional to check if the element is a number 
// sum the the current value with the overall sum if its a number and return the sum if its not a number 
// convert it to binary by using .toString(2) // the 2 argument is fundmental to the conversion


//solution:

function arr2bin(arr) {
    return arr.reduce((sum, cur) => typeof(cur) === 'number' ? sum + cur : sum, 0).toString(2);  
    // to string with 2 as an argument turns to binary
  }