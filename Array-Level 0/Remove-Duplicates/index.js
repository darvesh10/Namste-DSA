const uniqueElements = (arr)=>{
    let k = 0;
    for(i=1; i<arr.length; i++){
        if(arr[i]!==arr[k]){
            k++
            arr[k] = arr[i];
        }
    }
 return k+1;
}
let arr = [0,0,1,1,2,2,3,3,3,4];
console.log(uniqueElements(arr));
