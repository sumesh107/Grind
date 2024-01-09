/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const caclcval = function(str){
    return str.split('').sort().join('');
}

var checkInclusion = function(s1, s2) {
    let l=0;
    let r = s1.length;
    let temp = new String("");

    while(r<=s2.length)
    {   
        temp = s2.slice(l,r);       
        
        if( caclcval(s1) == caclcval(temp) )
            return true;

        l++;
        r++;
    }
    return false;
};

const s1="adc";
const s2="dcda";

console.log(checkInclusion(s1,s2));