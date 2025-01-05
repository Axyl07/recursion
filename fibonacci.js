console.log('fib');
function fibs(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
       if (i<2) {
           arr[i] = i;
       }
       else {
           arr[i] = arr[i - 1] + arr[i - 2];
        }
    }
    return arr;
}
console.log(fibs(8));