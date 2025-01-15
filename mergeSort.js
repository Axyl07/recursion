console.log("merge");

  function mergeSort(array, low = 0, high = array.length - 1) {
    if (array.length < 2) {
      return array;
    }
    else {
      let mid = parseInt((low + high) / 2);
      let left = array.slice(low, mid + 1);
      let right = array.slice(mid + 1, high + 1);
      let leftSubArray = mergeSort(left, low, mid);
      console.log(leftSubArray);
      let rightSubArray = mergeSort(right, mid + 1, high);
      console.log(rightSubArray);
      // (leftSubArray, rightSubArray);
      // mergeSort(array, low, high,outputArray);
      return merge(leftSubArray,rightSubArray);
      
    }
  }

  console.log("sorted: " + mergeSort([4,3,2,1]));
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

