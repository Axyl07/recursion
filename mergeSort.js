console.log("merge");



function mergeSort(array) {
  if (array.length<2) {
    return array;
  }
  else {
    if (array.length%2===0) {
      let mid = array.length / 2 - 1;
      let leftArr = array.slice(0, mid+1);
      let rightArr = array.slice(mid + 1, array.length);
      if (leftArr.length<2 && rightArr.length<2) {
        return merge(leftArr, rightArr);
      } else {
        let leftPart = mergeSort(leftArr);
        let rightPart = mergeSort(rightArr);
        return merge(leftPart, rightPart);
      }
    } else {
      let mid = array.length / 2 ;
      let leftArr = array.slice(0, mid+1);
      let rightArr = array.slice(mid + 1, array.length);
      if (leftArr.length<2 && rightArr.length<2) {
        return merge(leftArr, rightArr);
      } else {
        let leftPart = mergeSort(leftArr);
        let rightPart = mergeSort(rightArr);
        return merge(leftPart, rightPart);
      }
    }
  }
}
console.log(mergeSort([1,0,5,-3,12,562,1,-7,5]));

// console.log("sorted: " + mergeSort([8,4,6,5,3,2,1,0]));
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

  for (; i < m; i++) {
    outputArray[k++] = leftArray[i];
  }

  for (; j < n; j++) {
    outputArray[k++] = rightArray[j];
  }
  return outputArray;
}
// console.log(merge([3, 5, 6, 7, 8], [1, 2, 3, 4, 5]));
// let array = [6, 5, 4, 3, 2, 1, 0]
// console.log(array.length);
// console.log(parseInt((array.length) / 2));
