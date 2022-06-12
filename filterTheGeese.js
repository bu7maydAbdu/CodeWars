//filter the birds array
// check if the bird element is in the geese array 
// return the elements that are not in the geese array 
//using filter method 


function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(b => !geese.includes(b)); // here we checked if the bird element is not included in the geese array
  };