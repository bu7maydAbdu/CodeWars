//case:


//Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.








//solution:


function cubeOdd(arr) {
if (!arr.every(e => typeof e === "number")){
       return undefined 
    }else {
      

return arr.filter (e => e %2 !== 0).reduce((a,c) => a +(c**3),0)
  }
  


}



//another solutions:


let cubeOdd = a => {
let isNumeric = a.every(x=>!isNaN(x))
  return isNumeric ? a.filter(n=>n%2).reduce((s,n)=>s+(n*n*n),0) : undefined
}