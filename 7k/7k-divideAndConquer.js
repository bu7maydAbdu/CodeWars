//case:


// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

// Return as a number.





//solution:

function divCon(x){
    return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
  }



  // my alleged solution  (doesn't work on codewars)

function divCon(x){
    const non = x.filter(e => (typeof e) === "number").reduce((a,b)=> a + b)
    const str = x.filter(e => (typeof e) === "string").map(e => Number(e)).reduce((a,b)=> a + b)
    return (non - str)
  }