function findRotatedIndex(arr, val) {
    let pivot = findPivot(arr);
    if(val > arr[pivot] || val < arr[pivot + 1]){
        return -1;
    } else if(val <= arr[pivot] && val > arr[arr.length - 1]){
        return binarySearch(arr, val, 0, pivot)
    } else{
        return binarySearch(arr, val, pivot, arr.length)
    }
}

function binarySearch(arr, val, left, right){
    if(left <= right){
        let mid = Math.floor((right - left) / 2) + left;
        if(arr[mid] === val){
            return mid;
        } else if(arr[mid] > val){
            return binarySearch(arr, val, left, mid - 1)
        } else{
            return binarySearch(arr, val, mid + 1, right)
        }
    }
    return -1;
}

// Returns index of last item of left pivot
function findPivot(arr, left = 0, right = arr.length - 1){
    if(left <= right){
        let mid = Math.floor((right - left) / 2) + left;
        if(arr[mid] > arr[arr.length - 1]){
            if(arr[mid] > arr[mid + 1]){
                return mid;
            } else{
                return findPivot(arr, mid + 1, right)
            }
        } else{
            return findPivot(arr, left, mid - 1)
        }
    }
    return arr.length - 1
}


module.exports = findRotatedIndex