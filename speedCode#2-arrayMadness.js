// case :
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.


//solution
function arrayMadness(a, b) {
    // Ready, get set, GO!!!
  const asqrs =   a.reduce((a, c)=> a + c**2 , 0)
   const bcubes =  b.reduce((a, c)=> a + c**3 , 0)
  if(asqrs > bcubes){
    return true
  }else {
  return false
  }
    
  }


  //better solution 
  const arrayMadness = (a, b) => a.reduce((acc, x) => acc + x**2, 0) > b.reduce((acc, x) => acc + x**3, 0) 