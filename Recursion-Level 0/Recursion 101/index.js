function print(n){
    if(n<1) return;
    console.log(n);
    n = n-1;
    print(n);
}
let n = 10
print(n); //Print numbers from n to 1 using recursion.