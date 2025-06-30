let arr = [5,4,3,2,1]
function sumOfArr(n){
    if(n==-0) return arr[n];
return arr[n]+sumOfArr(n-1);
}
let n = arr.length-1;
console.log(sumOfArr(n)); //sum of all the numbers in the arr
