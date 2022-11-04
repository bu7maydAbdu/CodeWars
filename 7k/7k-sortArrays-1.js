//case:

// Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.




//solution:


const sortme = function( names ){
    return names.sort()
  }




  // another solution:


  sortme = function( names ){
    return names.sort(function(a, b) { return a > b ? 1 : a < b ? -1 : 0 });
  }
