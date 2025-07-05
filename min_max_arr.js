class Solution {
    getMinMax(arr) {
        // code here
        const min = Math.min(...arr);
        const max = Math.max(...arr);
        return [min, max];
    }
}