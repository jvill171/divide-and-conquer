function findFloor(arr, x, left = 0, right = arr.length-1) {
  if(left <= right){
    let midPoint = Math.floor((right - left) / 2) + left;
    if(arr[midPoint] <= x && (arr[midPoint + 1] >  x || midPoint === arr.length - 1) ){
        return arr[midPoint]
    } else if(arr[midPoint] > x){
        return findFloor(arr, x, left, midPoint - 1)
    } else{
        return findFloor(arr, x, midPoint + 1, right)
    }
  }
  return -1;
}

module.exports = findFloor