<<<<<<< HEAD
class Solution {

    thirdLargest(arr) {
        // your code here
        if (arr.length < 3) return null;

        // Sort in descending order
        arr.sort((a, b) => b - a);

        return arr[2];
    }
=======
class Solution {

    thirdLargest(arr) {
        // your code here
        if (arr.length < 3) return null;

        // Sort in descending order
        arr.sort((a, b) => b - a);

        return arr[2];
    }
>>>>>>> 74b999fc2a5fad862e33d1f84b552a61dfca672f
} 