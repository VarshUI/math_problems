class Solution {
    isSubset(a, b) {
        const copyB = [...b];
        const copyA = [...a];

        for (let i = 0; i < copyB.length; i++) {
            let found = false;

            for (let j = 0; j < copyA.length; j++) {
                if (copyB[i] === copyA[j]) {
                    found = true;
                    copyA.splice(j, 1); 
                    break;
                }
            }

            if (!found) return false;
        }

        return true;
    }
}

