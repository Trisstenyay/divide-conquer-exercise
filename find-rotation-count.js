function findRotationCount(array) {

        let left = 0;
        let right = arr.length - 1;
    
        // If the array is not rotated at all
        if (arr[left] <= arr[right]) {
            return 0;
        }
    
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
    
            // Check if mid is the rotation point (smallest element)
            if (arr[mid] > arr[mid + 1]) {
                return mid + 1;
            }
    
            if (arr[mid - 1] > arr[mid]) {
                return mid;
            }
    


            // Decide whether to search in the left half or the right half
            if (arr[left] <= arr[mid]) {
                // Left part is sorted, search in the right half
                left = mid + 1;
            } else {
                // Right part is sorted, search in the left half
                right = mid - 1;
            }
        }
    
        return 0;
    }
    

module.exports = findRotationCount