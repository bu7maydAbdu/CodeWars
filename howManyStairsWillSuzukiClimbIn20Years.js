//problem section::


// Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

// The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

// 20_year_estimate = one_year_total * 20




//solution 1 (perfect)

function stairsIn20(array) {
    return 20 * array.reduce((s, a) => s + a.reduce((s, n) => s + n, 0), 0);
  }


  // solution 2 

  function stairsIn20(s){
    for (let i = 0, sum = 0; i<s.length ; i++) {
      for (let j = 0; j<s[i].length; j++) {
        sum += s[i][j];
      }
    }
    return sum*20;
  }



  //solution 3


  function stairsIn20(s){
    let arr = [].concat(...s)
    let newArr = [].concat(...arr)
    return newArr.reduce((a, b) => a+b)*20
 }