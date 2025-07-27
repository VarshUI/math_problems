/**
 * @param {number[]} arr
 * @param {number} target
 * @return {boolean}
 */
class Solution {
    twoSum(arr, target) {
        let hash = {};
        for (let i = 0; i < arr.length; i++) {
            const current = arr[i];
            const complement = target - current;

            if (hash[complement] !== undefined) {
                return [hash[complement], i]; // ✅ return both indices as array
            }

            hash[current] = i; // store the current number with its index
        }

        return null; // no pair found
    }
}
