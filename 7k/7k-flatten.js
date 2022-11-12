//case:


// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]




//solution:


const flatten = (array) => [].concat(...array);




// another solution:


   function flatten(lol){
    return [].concat.apply([],lol);
  }



  // another solution:

  const flatten = function (array){
    return array.reduce(function(a,z) {
      return a.concat(z);
    }, []);
  }