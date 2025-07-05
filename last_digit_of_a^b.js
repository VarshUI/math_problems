class Solution {
    getLastDigit(a, b) {
        if (b === 0 || b === "0") return 1;

        const base = a % 10;
        const cycles = {
            0: [0],
            1: [1],
            2: [2, 4, 8, 6],
            3: [3, 9, 7, 1],
            4: [4, 6],
            5: [5],
            6: [6],
            7: [7, 9, 3, 1],
            8: [8, 4, 2, 6],
            9: [9, 1]
        };

        const cycle = cycles[base];
        const bigB = BigInt(b);
        const index = (bigB - 1n) % BigInt(cycle.length);
        return cycle[Number(index)];
    }
}