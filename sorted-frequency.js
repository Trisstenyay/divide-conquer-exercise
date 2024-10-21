function sortedFrequency(array, num) {

        let firstIndex = -1;
        let lastIndex = -1;
    
        // Finding the first occurrence of `num`
        let left = 0;
        let right = arr.length - 1;
    
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === num) {
                firstIndex = mid; // Update the first occurrence
                right = mid - 1;  // Search for the first occurrence on the left side
            } else if (arr[mid] < num) {
                left = mid + 1;   // Search in the right half
            } else {
                right = mid - 1;  // Search in the left half
            }
        }
    


        // Finding the last occurrence of `num`
        left = 0;
        right = arr.length - 1;
    
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === num) {
                lastIndex = mid;  // Update the last occurrence
                left = mid + 1;   // Search for the last occurrence on the right side
            } else if (arr[mid] < num) {
                left = mid + 1;   // Search in the right half
            } else {
                right = mid - 1;  // Search in the left half
            }
        }
    

        
        // If firstIndex is still -1, it means num was not found
        if (firstIndex === -1) {
            return -1;
        }
    
        // Calculate the frequency
        return lastIndex - firstIndex + 1;
    }
    

module.exports = sortedFrequency