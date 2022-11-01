// case :

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.


//solution:


const capitals = function (word) {
    const caps = [];
    for(let i = 0; i < word.length; i++) {
      if(word[i].toUpperCase() == word[i]) caps.push(i);
    }
    return caps;
  };