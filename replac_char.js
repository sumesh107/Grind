/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

const maxer = function (map)
{
    let max_count = 0;

    for(let m of map.values())
    {
        max_count = Math.max(m,max_count);
    }

    return max_count;
};

var characterReplacement = function(s, k) {
    
    let map = new Map();
    let l=0; 
    let r= 0;

    let count = 0;
    let max_count = 0;

    if (s.length === 0) return 0;
    if (s.length === 1) return 1;


     while(r < s.length)
     {
        if(!map.has(s[r]))
            map.set(s[r],1);
        else
            map.set(s[r],map.get(s[r]) + 1);

        if( (((r-l)+1) - maxer(map)) > k )
         {
            map.set(s[l],map.get(s[l]) - 1);
            l++;
         }
         else
         {
            max_count = Math.max(((r-l)+1),max_count);
         }
         r++;
         
    }
    return max_count;
};

const s = "AABABBA";
const k = 1;
console.log(characterReplacement(s,k));