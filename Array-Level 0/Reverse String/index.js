const reverseString = (arr) => {
    let halflen = Math.floor(arr.length / 2);
    let len = arr.length;

    for (let i = 0; i < halflen; i++) {
        let tmp = arr[i];
        arr[i] = arr[len - 1 - i];
        arr[len - 1 - i] = tmp;
    }

    return arr; 
}

console.log(reverseString(["h", "e", "l", "l", "o"])); 
