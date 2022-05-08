function monkeyCount(n) {
    // your code here
      let count =[]   // first we make an empty array that we are gonna count the monkeys in 
      for(let i = 1 ; i <= n ; i++){// here we use a loop to that add a number every time the it loops until it completes all the number of monkeys
         count.push(i)// we push the number into the array 
      }
      return count // now we return the array of count 
    }