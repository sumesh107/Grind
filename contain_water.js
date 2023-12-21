/*You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.*/

var maxArea = function(height) {
   
    let hi;
    let maxare = 0;
    let l=0; let r=height.length-1;

   while(r>l)
   {
        hi = Math.min(height[l],height[r]);
        maxare = Math.max(maxare, hi* (r-l) );

        if(height[l] < height[r])
            l++;
        else
            r--;
   } 

   return maxare;
};

const height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height));