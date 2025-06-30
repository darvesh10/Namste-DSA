let arr = [3,2,9,10,3];
function oddSum(n){
let isOdd = arr[n]%2 !== 0;
if(n==0) {
return isOdd ? arr[n] : 0
}
return ((isOdd?arr[n]:0)+oddSum(n-1))


}
let n = arr.length-1;
console.log(oddSum(n));