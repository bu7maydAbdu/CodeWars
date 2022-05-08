function arrayPlusArray(arr1, arr2) {
    const sum1 = arr1.reduce((acc, c)=> acc + c , 0)
      const sum2 = arr2.reduce((acc, c)=> acc + c , 0)
    return sum1 + sum2; //something went wrong
  }








//another solution :

//   function arrayPlusArray(arr1, arr2) {
//     return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
//   }