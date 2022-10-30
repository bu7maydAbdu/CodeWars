// case :


// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]




// solution:

const number=(array) => {

    return array.map((e, i) => `${i + 1}: ${e}`)
  
  }



  // another solution :

 function number(array) {
    return array.map(function (line, index) {
      return (index + 1) + ": " + line;
    });
  }



  // another solution2:


  const number = function(arr) {
    const newArr = [];
      if (arr.length === 0) {
        return [];
      } else {
        for (var i = 0, len = arr.length; i < len; i += 1) {
          newArr.push((i + 1) + ': ' + arr[i]);
        }
      }
      return newArr;
    }