//Dynamic Programming solution

//Time complexity: O(n)
//Space complexity: O(1)


var maxProduct = (nums) => {
  let maxPos = 0;   // setting local and global variables to num[0], and 0
        let maxNeg = 0;
        let toRet = nums[0];
        
        for(let i of nums){  // We keep a temp variable because we want to keep track of the toRet before any calculations
            if(i == 0){
                toRet = Math.max(toRet, 0);
                maxPos = 0; maxNeg = 0;
                continue;
            }
            
            if(i > 0){
                maxPos = maxPos == 0 ? i:i*maxPos;
                maxNeg = maxNeg*i;
            }
            if(i < 0){
                let maxPosTemp = maxPos;
                maxPos = maxNeg*i;
                maxNeg = maxPosTemp == 0?i:maxPosTemp*i;
            }
            if(maxPos != 0){
                toRet = Math.max(toRet, maxPos);
            }
            
        }
        
        return toRet;
    }


/*
Success
Details 
Runtime: 72 ms, faster than 93.03% of JavaScript online submissions for Maximum Product Subarray.
Memory Usage: 40.8 MB, less than 12.88% of JavaScript online submissions for Maximum Product Subarray.
*/
