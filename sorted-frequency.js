function sortedFrequency(arr, val) {
    let first = findFirstInstance(arr, val);
    let counter = 0;
    if(first === -1){
        return first;
    }
    while(arr[first] == val){
        counter += 1;
        first += 1;
    }
    return counter;
}

// Returns index of first instance of val, or -1 if not found
function findFirstInstance(arr, val, left = 0, right = arr.length - 1){
    if(left <= right){
        let mid = Math.floor((right - left) / 2) + left;
        if(arr[mid] === val){
            if(mid === 0 || arr[mid - 1] != val){
                return mid;
            } else{
                return findFirstInstance(arr, val, left, mid - 1)
            }
        } else if(arr[mid] > val){
            return findFirstInstance(arr, val, left, mid - 1)
        } else {
            return findFirstInstance(arr, val, mid + 1, right)
        }
    }
    return -1;
}

module.exports = sortedFrequency