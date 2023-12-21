const palin = (s)=>{
    
    var string="";

    for(str of s)
    {
        let regex = /^[a-zA-Z]+$/;

        if(regex.test(str))
            string = string.concat(str);
    }

    string = string.toLowerCase();
    
    for(let i=0,j=string.length-1;i<=j;i++,j--)
    {
        if(string[i]===string[j])
            continue;
        else
            return false;
    }
    return true;
}

const s ="A man, a plan, a canal: Panama";
console.log(palin(s));

