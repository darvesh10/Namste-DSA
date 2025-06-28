const singleNum = (nums)=>{
    let xor = 0;
    for (let i = 0; i < nums.length; i++) {
        xor = xor ^ nums[i];
    }
    return xor;
}
console.log(singleNum([4,0,0,1,2,1,2]))