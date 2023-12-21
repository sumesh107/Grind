const kfreq = (nums,k)=>{
    
   let map = new Map();

   nums.sort((a,b)=>a-b);

   let count = 1;
   map.set(nums[0],count);

   for(let i=1;i<nums.length;i++)
   {
        if(nums[i]==nums[i-1])
        {
            map.set(nums[i],(map.get(nums[i])+1));
        }
        else
        {  
            map.set(nums[i],1);
        }
   }

  // hash count from the map 
  let result = [];
  for (let [key, count] of map) 
  {
    result.push([key, count]); 
  }

   result.sort((a,b)=> b[1]- a[1]);

   return result.slice(0, k).map((x)=>x[0]);

}

const nums = [5,2,5,3,5,3,1,1,3]
const k = 2

console.log(kfreq(nums,k));