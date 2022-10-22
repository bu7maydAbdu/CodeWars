//case:
// You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.



//solution:



const ArrowFunc = function(arr) {
    return arr.map( x => String.fromCharCode(x)).join(''); //Complete this function
  }



  // another solution:

  const ArrowFunc = (arr) => String.fromCharCode(...arr);


  // another solution 2:

  const ArrowFunc = arr => String.fromCharCode.apply(String, arr);