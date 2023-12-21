/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let l=0; let r=0;

    let count = 0;
    let max_count = 0;

    if (s.length === 0) return 0;
    if (s.length === 1) return 1;


    while(r < s.length)
    {
        if(map.has(s[r]))
        {
            map.delete(s[l]);
            l++;
            count = count-1;
        }
        else
        {
            map.set(s[r],1)
            count = count+1;    
        }

        max_count = Math.max(count,max_count);
        r++;
    }

    return max_count;
};

const s = "aaaba";
console.log(lengthOfLongestSubstring(s));