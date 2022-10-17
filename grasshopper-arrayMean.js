const findAverage = (nums) => {
    // Code here
    return (nums.reduce((a,c)=> a + c , 0) / nums.length)
  }