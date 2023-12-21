var threeSum = function(nums) {
    
    let arr = nums.sort((a,b)=>a-b);
    let l,r; let x;

    let n = arr.length;
    let res = [];

    for(let i=0;i<n-2;i++)
    {
        l=i+1;
        r=n-1;

        if(i>0 && arr[i]==arr[i-1])
            continue;

        while(l<r)
        {
            x = arr[i]+arr[l]+arr[r];
            
            if(x == 0)
            {
                if(res.length < 0 || res[res.length-1] != [arr[i],arr[l],arr[r]])
                    res.push([arr[i],arr[l],arr[r]]);
                l++;
                r--;
            }    

            else if( x < 0)
             l++;

            else if(x > 0)
             r--;   
        }
    }
    return res;
};

const nums = [-2,0,0,2,2];
result = threeSum(nums);

console.log(result);