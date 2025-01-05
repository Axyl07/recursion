console.log("merge");

function split(array, low = 0, high = array.length - 1) {
    console.log('low'+low);
    console.log('high'+high);
    if (low < high) {
        let mid = parseInt((low + high) / 2);
        console.log('mid'+mid);
        let left = split(array,low,mid);
        let right = split(array,mid+1,high);
        console.log('left'+left);
        console.log('right'+right);
        return left;
        
    } return array
}
console.log(split([1, 2, 3, 4, 5, 6,]));