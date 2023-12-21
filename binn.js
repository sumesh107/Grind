var search = function(nums, target) {
    let left=0;
    let right = nums.length-1;
    let mid;

    if(nums.length == 1 && nums[0] == target)
    return 0;

  while(left <= right)
  {
    mid = Math.floor( (left+right) / 2);

    if(nums[mid]==target)
        return mid;

    else if(nums[mid]<target)
        left = mid+1;

    else
        right = mid-1;      
  }

  return -1;
    
};

var searchMatrix = function(matrix, target) {

    let mat = [];

    for(let i=0;i<matrix.length;i++)
    {
        for(let j=0;j<matrix[0].length;j++)
        {
            mat.push(matrix[i][j]);
        }
    }

    if( search(mat,target)!= -1)
     return true;

    return false; 
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3));
