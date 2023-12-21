var search = function(nums, target) {

    var res = -1;
    var left=0,right;
    var mid;

    right = nums.length - 1;

    if(nums.length == 1 && nums[0] == target)
        return 0;

    while(left != right){
        mid = Math.floor ( (left + right) /2 );

        if( nums[mid] == target){
            return mid;
        }

        else if( nums[mid] < target){
            left = mid+1;
            continue;
        }

        else{
            right = mid-1;
            continue;
        }
    }
    return res;
  
};

console.log( search([-1,0,3,5,9,12],9));