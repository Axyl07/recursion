console.log("merge");

// function split(array, low = 0, high = array.length - 1) {
//   console.log("low = " + low);
//   console.log("high = " + high);
//   if (low < high) {
//     let mid = parseInt((low + high) / 2);
//     console.log("mid = " + mid);
//     let left = split(array, low, mid);
//     let right = split(array, mid + 1, high);
//     console.log("left = " + left);
//     console.log("right = " + right);
//     return left;
//   }
//   return array;
// }

// function split(array, low = 0, high = array.length - 1) {

//     let mid = parseInt((low + high) / 2);
//     console.log("mid is " + mid);
//     let leftArray = array.slice(low, mid + 1);
//     let rightArray = array.slice(mid + 1, high);
//     console.log(leftArray);
//     console.log(rightArray);

// }
// console.log(split([1, 2, 3, 4, 5, 6]));

function merge(leftArray, rightArray) {
  let m = leftArray.length;
  let n = rightArray.length;
  let outputArray = [];
  let i = 0,
    j = 0,
    k = 0;
  while (i < m && j < n) {
    if (leftArray[i] < rightArray[j]) {
      outputArray[k++] = leftArray[i++];     
    } else {
      outputArray[k++] = rightArray[j++];
    }
  }
  while (i < m) {
    outputArray[k++] = leftArray[i++];
  }

  while (j < n) {
    outputArray[k++] = rightArray[j++];
  }
 
  return outputArray;
}

console.log(merge([1,7], [2,4]));
