const maxConsecutiveArr =(arr)=>{
let maxCount = 0;
let currnCount = 0;

for(let i=0; i<arr.length; i++){
    if(arr[i]!==0){
        currnCount++;
    }
    else{
        maxCount = Math.max(maxCount,currnCount);
        currnCount = 0;
    }
}
return maxCount = Math.max(currnCount,maxCount);
}

console.log(maxConsecutiveArr([1,0,1,0,1,1,1,1,0,1]));