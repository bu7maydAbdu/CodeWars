function doubleChar(str) {
    // Your code here
    return  str.split("").map(c => c + c).join("");
  }
   // split the string 
   // then map over it and return  the element plus itsself 
   //  join the array again back into a sring 