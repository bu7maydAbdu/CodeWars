// sum the differences between consecutive pairs in the array in descending order.
// [2, 1, 10]  -->  9


// solution
function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}