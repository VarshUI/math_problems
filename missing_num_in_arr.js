<<<<<<< HEAD
class Solution {
    missingNum(arr) {
        const n = arr.length + 1;
        const expectedSum = (n * (n + 1)) / 2;
        const sum = arr.reduce((acc, val) => acc + val, 0);
        const missingNumber = expectedSum - sum;
        return missingNumber;
    }
}
=======
class Solution {
    missingNum(arr) {
        const n = arr.length + 1;
        const expectedSum = (n * (n + 1)) / 2;
        const sum = arr.reduce((acc, val) => acc + val, 0);
        const missingNumber = expectedSum - sum;
        return missingNumber;
    }
}
>>>>>>> 74b999fc2a5fad862e33d1f84b552a61dfca672f
