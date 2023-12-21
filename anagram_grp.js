const caclcval = function(str){

    return str.split('').sort().join('');

}

var groupAnagrams = function(strs) {
    
    let map = new Map();

    for(let str of strs)
    {   
        let val = caclcval(str);
        if(map.has(val))
        {
            map.get(val).push(str);
        }
        else
        {
            map.set(val,[str]);
        }
    } 

    let result = [];

    for(str of map.values())
    {
        result.push(str);
    }

    return result;
};

console.log(groupAnagrams(["cab","tin","pew","duh","may","ill","buy","bar","max","doc"]));