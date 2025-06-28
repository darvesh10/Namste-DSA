const removedElement = (arr,val) =>{
let k = 0;
for(let i=0; i<arr.length; i++){
    if(arr[i]!==val){
        arr[k]=arr[i];
        k++;
    }
}
return k;
}
let val = 3;
let arr = [3,2,3,4,5,6,6,3]
console.log(removedElement(arr,val))