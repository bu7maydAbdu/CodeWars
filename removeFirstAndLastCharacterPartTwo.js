//***challenge case *************
//You are given a string containing a sequence of character sequences separated by commas.

//Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

//If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).





//****** solution 1 ********


const array = (arr) => {
    arr = arr.split(',')
    arr.pop()
    arr.shift()
    return arr.join(' ') === '' ? null : arr.join(' ')
  }



  //******* another solution(best practice)*********


  function array(arr){
    return arr.split(",").slice(1,-1).join(" ") || null;
  }


