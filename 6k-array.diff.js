//case:


// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]



//solution:



function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }

  


  //another solution:


  function arrayDiff(arr1, arr2){
    if(arr2.length < 1){
        return arr1
    }else {
        for(const i of arr2){
            while(arr1.includes(i)){
                let loc = arr1.indexOf(i)
                arr1.splice(loc, 1)
            }
        }
        return arr1
    }
}






// another solution:


function array_diff(a, b) {
    b = new Set(b)
    return a.filter(v => !b.has(v))
  }