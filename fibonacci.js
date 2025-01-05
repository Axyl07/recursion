console.log("fibo:");
function fibs(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    if (i < 2) {
      arr[i] = i;
    } else {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
  }
  return arr;
}
// console.log(fibs(8));

function fibsRec(n, array = [0, 1]) {
  console.log("hi");
  if (n <= 1) return [0];
  if (n === 2) {
    return array;
  } else {
    array.push(array[array.length - 1] + array[array.length - 2]);
    return fibsRec(n - 1, array);
  }
}
console.log(fibsRec(5));
