class Solution {
    ReverseExponentiation(n) {
        const reversed=parseInt(n.toString().split('').reverse().join(''));
        return Math.pow(n, reversed);
    }
}
