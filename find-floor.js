function findFloor(array, x) {

        let left = 0;
        let right = arr.length - 1;
        let floor = -1; // Initialize floor as -1 in case no valid floor is found
    
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
    
            if (arr[mid] === x) {
                // If we find the exact value, it's the floor
                return arr[mid];
            } else if (arr[mid] < x) {
                // Current mid is a candidate for the floor
                floor = arr[mid];
                // Move to the right to check for a larger candidate
                left = mid + 1;
            } else {
                // Move to the left to find smaller elements
                right = mid - 1;
            }
        }
    
        return floor; // If no floor is found, it will return -1
    }
    

module.exports = findFloor