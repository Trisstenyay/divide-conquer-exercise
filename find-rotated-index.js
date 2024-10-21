function findRotatedIndex(array, num) {
    
        let left = 0;
        let right = arr.length - 1;
    
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
    
            // Check if we found the number
            if (arr[mid] === num) {
                return mid;
            }
    



            // Determine which side is sorted
            if (arr[left] <= arr[mid]) {
                // Left side is sorted
                if (num >= arr[left] && num < arr[mid]) {
                    right = mid - 1; // Search in the left half
                } else {
                    left = mid + 1; // Search in the right half
                }


            } else {
                // Right side is sorted
                if (num > arr[mid] && num <= arr[right]) {
                    left = mid + 1; // Search in the right half
                } else {
                    right = mid - 1; // Search in the left half
                }
            }
        }
    
        return -1; // Number not found
    }
    

module.exports = findRotatedIndex