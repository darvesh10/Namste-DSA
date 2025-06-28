const maxProfit = (arr)=>{
    let maxProfit = 0;
    let minPrices =arr[0];

for(let i = 1; i<arr.length; i++){
   if(arr[i]-minPrices>maxProfit){
    maxProfit = arr[i]-minPrices;
   }
   if(arr[i]<minPrices){
    minPrices = arr[i];
   }
}
return maxProfit > 0 ? maxProfit : 0;
}
 let arr = [7,1,5,3,6,4];
 console.log(maxProfit(arr))