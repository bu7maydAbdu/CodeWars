// case:
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.




// array of integers , all positive , no floats
// return sum of the 2 lowest numbers 
// sort the array from the lowest to the highest
// sum the  first two elements as  it represents the lowest
// return the sum of the first two elemwnts



// solution:

function sumTwoSmallestNumbers(numbers) {  
    //Code here
   const sorted = numbers.sort((a, b) => a-b)
   
   return (sorted[0] + sorted[1])
  }