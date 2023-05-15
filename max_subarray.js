var maxSubArray = function(nums) {
    var maxSum = 0;

    var summ = function(nums,i,sum){
        if(i<nums.length){
            val =  Math.max( summ(nums,i+1,sum), summ(nums,i+1,sum+nums[i]));
            maxSum = Math.max(val,maxSum)
            return val;

        }
        return 0;   
    }

    if(nums.length == 1)
        return nums[0];
        
    summ(nums,0,0);
    return maxSum;
};

console.log(maxSubArray([2,3]));

//Kadane's algorith
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    var maxint = Math.pow(10,4);   
    var max_so_far = -maxint - 1;
    var max_now = 0;
   
    for(let i=0;i<nums.length;i++){
        max_now = max_now + nums[i];
   
        if(max_now > max_so_far){
            max_so_far = max_now;
        }
        if(max_now < 0) 
        {
            max_now = 0;
        }
    }
   
    return max_so_far;
   };