const missingNumber = (nums)=>{
    let n = nums.length;
    let total_sum = (n*(n+1)/2);
    let sumOfArr = 0;

    for(let i = 0; i<nums.length; i++){
        sumOfArr+= nums[i];
    }
    return total_sum-sumOfArr;
}
console.log(missingNumber([4,0,1,2,5]));