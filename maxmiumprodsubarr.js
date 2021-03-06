//Dynamic Programming solution

//Time complexity: O(n)
//Space complexity: O(1)


var maxProduct = (nums) => {
  let maxPos = 0;   
        let maxNeg = 0;
        let toRet = nums[0];
        
        for(let i of nums){ 
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




//Solution 2: Kadane's Algo

//Time complexity: O(n)
//Space complexity: O(1)

const maxProduct = (nums) => {
  
  let globalMax = (localMin = localMax = nums[0]);  
  for (let i = 1; i < nums.length; i++) {   // On every iteration of i, we reset the localMax to 1
    let localMinTemp = localMin;   //Kadane start
    localMin = Math.min(nums[i], localMin * nums[i], localMax * nums[i]);
    localMax = Math.max(nums[i], localMinTemp * nums[i], localMax * nums[i]);
    globalMax = Math.max(globalMax, localMax);
  }
  return globalMax;
};


/*
Success
Details 
Runtime: 72 ms, faster than 93.03% of JavaScript online submissions for Maximum Product Subarray.
Memory Usage: 40.2 MB, less than 42.74% of JavaScript online submissions for Maximum Product Subarray.
*/
