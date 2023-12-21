const duplicate = (nums)=>{

    let m = new Map();

    for(let i=0; i < nums.length; i++)
    {
        if(m.has(nums[i]))
            return false;
        else
         m.set(nums[i],true);
    }
    return true;
}

const nums = [2,1,5,6];
console.log(duplicate(nums));