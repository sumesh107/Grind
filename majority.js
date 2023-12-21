/**
 * @param {number[]} nums
 * @return {number}
 */ 

var majority = (nums)=>{
  let can1 = 0;
    let can2 = 1;
    let count1=0; let count2=0;
    let res = [];
    let n = nums.length;

    for(let i=0;i<nums.length;i++)
    {
      if(nums[i]==nums[can1])
        count1++; 
      else if(nums[i]==nums[can2])
        count2++;
      else if(count1==0)
      {
        can1=i;
        count1=1
      }        

      else if(count2==0)
      {
        can2=i;
        count2=1
      }
      else
      {
        count1--;
        count2--;
      }
    }
    can1 = nums[can1];
    can2 = nums[can2];
    count1=0,count2=0;

    for(i=0;i<nums.length;i++)
    {
        if(can1==nums[i])
            count1++;
        if(can2==nums[i])
            count2++;
    }

    if(count1 > Math.floor(n/3))
        res.push(can1);

    if(count2 > Math.floor(n/3))
        res.push(can2);

    return res;    
}

const arr = [3,3,4,2,2,2,3];
console.log(majority(arr));