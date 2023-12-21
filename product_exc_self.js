const prod = (nums)=>{
    
    let answer = new Array(nums.length).fill(1);
    for(let i=0;i<nums.length;i++)
    {
        for(let j=0;j<nums.length;j++)
        {
            if(i!=j)
            {
                answer[i]=answer[i]*nums[j];
            }
        }
    }
    return answer;
}

console.log(prod([1,2,3,4]));