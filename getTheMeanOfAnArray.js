function getAverage(marks){
    
    let sum = marks.reduce((acc, c)=> acc + c , 0)
    let noOfMarks = marks.length
    
    return Math.floor(sum/noOfMarks)
  }