console.log("merge");

function split(array, low = 0, high = array.length - 1) {
  let mid = parseInt((low + high) / 2);
  let leftarray = array.slice(low, mid + 1);
  let rightarray = array.slice(mid + 1, high + 1);
  return [leftarray, rightarray];
}
console.log(split([1, 2, 3, 4, 5, 6, 7, 8]));
// function mergeSort(array, low = 0, high = array.length - 1) {
//   if (low<high) {
//     let mid = parseInt((low + high) / 2);
//     let leftArray = mergeSort(array, low, mid);
//     let rightArray = mergeSort(array, mid + 1, high);
//     return merge(leftArray, rightArray);
//   }
//   else {
//     return array;
//   }
// }

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

// console.log(merge([1, 7], [2, 4]));
