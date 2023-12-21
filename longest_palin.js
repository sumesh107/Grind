function longest_palin(s)
{
    let map = new Map();
    let cnt;

    for(let i=0;i<s.length;i++)
    {
        if(map.has(s[i]))
        {
            cnt = map.get(s[i]);
            map.set(s[i],cnt+1)
        }
        else
        {
            map.set(s[i],1);
        }
    }

    cnt=0;
    let odd_exist = false;

   map.forEach((val,key)=>{
    if( val % 2 == 0)
        cnt = cnt + val;
    else
        odd_exist = true;
   });
        
    if(odd_exist)
     return cnt+1;

    return cnt; 
}

console.log(longest_palin("abccccdd"));
