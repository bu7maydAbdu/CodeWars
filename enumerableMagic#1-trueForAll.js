//case:

//Create a method all which takes two params
// a sequence
// a function (function pointer in C)
// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.





// solution:

function all( arr, fun ){ // fun function returns either true or false 
    return arr.every(fun) // .every() checks that every element in the array fulfill the argument 
  }

// another solution:

  function all(arr, fun)
{
  let length = arr.length
  
  for (var i=0; i<length; ++i)
    if (!fun(arr[i]))
      return false
  
  return true
}