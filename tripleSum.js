class Solution {
    hasTripletSum(arr, target) {
        for(let i=0; i<arr.length-2; i++){
             const hash = {}
             const current = arr[i];
            const complement = target - current;
            for(let j=i+1; j< arr.length; j++){
                const second = arr[j];
                const required = complement - second
                if(hash[required] !== undefined){
                    return true;
                }hash[second]=j;
            }
        }return false;
        
    }
}