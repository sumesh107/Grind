//check if a string is a palindrome
/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    s = s.toLowerCase();
    s = s.replace(/[^a-zA-Z0-9]/g,"");

    if(!s)
     return true;
    
    for(let i=0,j=s.length - 1;i<j;i++,j--){
        if(s[i]==s[j]){
           continue; 
        }
        else 
         return false;
    }

    return true;
};


console.log( isPalindrome("A man, a plan, a canal: Panama"));