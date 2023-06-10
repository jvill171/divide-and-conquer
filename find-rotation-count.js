function findRotationCount(arr, left = 0, right = arr.length - 1) {
    if(left <= right){
        let mid = Math.floor((right - left) / 2) + left;
        if(arr[mid] > arr[arr.length - 1]){
            if(arr[mid] > arr[mid + 1]){
                return mid + 1;
            } else{
                return findRotationCount(arr, mid + 1, right)
            }
        } else{
            return findRotationCount(arr, left, mid - 1)
        }
    }
    return 0
}

module.exports = findRotationCount