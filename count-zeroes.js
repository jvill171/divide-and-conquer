function countZeroes(arr, left = 0, right = arr.length - 1) {
    if(left <= right){
        let midPoint = Math.floor((right-left)/2) + left;
        if(arr[midPoint] === 0 && (midPoint === 0 || arr[midPoint - 1] === 1)){
            return arr.length - midPoint;
        } else if(arr[midPoint] === 1){
            return countZeroes(arr, midPoint + 1, right)
        } else{
            // arr[midpoint] = 0, not first element, not to the  right of a 1
            return countZeroes(arr, left, midPoint - 1)
        }
    }
    return 0;
}

module.exports = countZeroes