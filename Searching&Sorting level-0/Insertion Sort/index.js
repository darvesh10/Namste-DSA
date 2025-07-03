function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++){
         let curr = arr[i];
         let prev = i - 1;
        while (arr[prev] > arr[curr] && prev>=0) {
            arr[prev + 1] = arr[prev]
            prev--
        }
        arr[prev + 1] = curr;
    }
    return arr;
}
console.log(insertionSort([-10, -8, -2, 5, 2, 3, 8]));