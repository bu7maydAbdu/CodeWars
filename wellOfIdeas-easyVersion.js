// filter the good ideas 
// check the length of the array of  good ideas 
//check if there are good ideas  to return "publish"
// check if the good ideas are more than 2  to return "i smell aseries "
// if there is no good ideas return "Fail"


function well(x){
    const good_count = x.filter(x => x == 'good').length;
     return good_count < 1 ? 'Fail!' : 
            good_count < 3 ? 'Publish!' : 'I smell a series!';
   }

