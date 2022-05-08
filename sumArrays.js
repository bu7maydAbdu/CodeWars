function sum (numbers) {
    if(numbers === null){
      return 0
    }else{
return numbers.reduce((acc, c)=> acc + c , 0)
    
    }
    
    
};