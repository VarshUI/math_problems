class Solution {
    missingNum(arr) {
        const n = arr.length + 1;
        const expectedSum = (n * (n + 1)) / 2;
        const sum = arr.reduce((acc, val) => acc + val, 0);
        const missingNumber = expectedSum - sum;
        return missingNumber;
    }
}
