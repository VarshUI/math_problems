class Solution {

    thirdLargest(arr) {
        // your code here
        if (arr.length < 3) return null;

        // Sort in descending order
        arr.sort((a, b) => b - a);

        return arr[2];
    }
} 