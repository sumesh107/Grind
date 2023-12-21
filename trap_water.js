function maxWater(hi, n) 
    { 
        // To store the maximum water 
        // that can be stored 
        let result = 0; 
        let left_hi_max;
        let right_hi_max;
  
        // For every element of the array 
        // except first and last element 
        // they are boundaries and there left is vast valleys so water can't stay on them, maybe a hot spring !! (lyol)
        for(let i = 1; i < n - 1; i++) 
        { 
            //checking the left walls and finding the highest one
            left_hi_max = hi[i];
            for(j=0;j<i;j++)
            {
                left_hi_max = Math.max(hi[j],left_hi_max);
            }

            //checking the right walls and finding the highest one
            right_hi_max= arr[i];
            for(j=i+1;j<n;j++)
            {
                right_hi_max = Math.max(hi[j],right_hi_max);
            }

            result = result + Math.min(left_hi_max,right_hi_max) - hi[i];
        } 
        return result; 
    } 
  
    function maxWater1(hi,n)
    {
        let l=0;
        let r=n-1
        let maxare = 0;
        let max_left = 0;
        let max_right = 0;

        while(r>l)
        {
            max_left = Math.max(hi[l],max_left);
            max_right = Math.max(hi[r],max_right);
     
             if(max_left < max_right)
             {
                l++;
                if(Math.min(max_left,max_right) - hi[l] > 0)
                    maxare = maxare + Math.min(max_left,max_right) - hi[l];
             }
                 
             else
             {
                r--;
                if(Math.min(max_right,max_left) - hi[r] > 0)
                    maxare = maxare + Math.min(max_right,max_left) - hi[r];
             }
                 
        } 
     
        return maxare;
    }
      
    let arr = [3,0,2,0,4]; 
    let n = arr.length; 

    console.log(maxWater(arr,n));
    console.log(maxWater1(arr,n));