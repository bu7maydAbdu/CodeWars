// first element ,not consecutive, return null if the whole array is consecutive , array numbers can be positive or negative



function firstNonConsecutive (arr) {
 //loop through the array 
  //if the element after adding 1 does not equal the next element value , then return the next element value 
  //otherwise return null 
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1]
    }
  }
  return null
}