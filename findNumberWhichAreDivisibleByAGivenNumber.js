// we take an array of numbers 
// check if the numbers are divisible by divisor  aka number[index] / divisor  should equal zero (0)
// make a new empty array in order to push divisible numbers into it 
// push the divisible numbers into the new array
// return the new array 


function divisibleBy(numbers, divisor){
    let divisible = []
     for (let i = 0 ; i <= numbers.length; i++) {
       if(numbers[i] % divisor === 0 ) {
      divisible.push(numbers[i])
       }
     }
    return divisible
  
  }