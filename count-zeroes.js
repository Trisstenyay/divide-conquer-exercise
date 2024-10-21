function countZeroes(array) {
  let left = 0;
  let right = array.length - 1;

  // Binary search for the first 0
  while (left <= right) {
    let mid = math.floor((left + right) / 2)

     // Check if mid is the first occurrence of 0
     if (arr[mid] === 0 && (mid === 0 || arr[mid - 1] === 1)) {
        return arr.length - mid; // Return the count of 0s
    }

     // If the current middle is 1, search to the right
     if (arr[mid] === 1) {
        left = mid + 1;
    }  

    else {
        right = mid - 1; // Search to the left
    }

  }

  return 0; // If no 0s are found
  
}


module.exports = countZeroes