//case :


// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.



//solution :



const countSheep = function (num){
    //your code here
    let str = ""
    if(num === 0){
      return str
    }else {
        for(let i = num ; i > 0 ; i-- ){
      str = `${i}`+" sheep..."+str
    }
        return str
  
    }
  
  }
