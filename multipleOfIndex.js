 //Case: 

 
 
 
 
 
 
 
 
 
 //===============================================

 // elements of the array are numbers , can be negative  , array.length > 1
//reutrns array of elements that are multiples of it's index 

// pass the array of numbers as a parameter for the function   we call it array

// iterate through the elements of the array by looping over it 
// check if the element is divisible by its index (conditional)



function multipleOfIndex(array) {
    let newArr = []
    
    for(let i = 0 ; i < array.length ; i++){
       if(array[i] % i === 0){
           newArr.push(array[i])
       }
    }
    return newArr
  }




  // optimum solution

  function multipleOfIndex(array) {
    return array.filter((num, i) => num % i === 0);
  }


  // tests : 

 console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]), "[-6, 32, 25]") 
 console.log(multipleOfIndex([2, 50 , 22, 8, 16]), "[22 , 16]") 
