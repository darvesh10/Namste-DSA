function slection(arr){
    for(let i=0; i<arr.length-1; i++){
        let min =i;
        for(let j=i+1; j<arr.length;j++){
            if(arr[j]<arr[min]){
                min = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min]
        arr[min] = temp;
        
 }
   return arr;
}

console.log(slection([2,1,4,5,2,5,6,2,1]))
