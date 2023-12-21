// { 1, 2, 3, 4, 1, 2, 5, 1, 2, 3 }

const shift = (arr,index) => {
    let i = index;

    //shifting from index to 0th
    while(i>0){
        arr[i] = arr[i-1];
        i=i-1;
    }
    return arr;
}


function put(arr,key,hash){
    let index = arr.length;
    let len = index;

    //finding the index from which to be shifted
for(let j=0;j<arr.length;j++){
    if(arr[j] == key )
     index = j;
}
arr = shift(arr,index);

//post shifting slicing to capacity
arr= arr.slice(0,len);
//replacing with accesed / inserted key
    arr[0] = key;


//output to console
console.log(" After the entry '"+key+ "' array: "+arr);
return arr;
}


arr = [1,2,3];
let key = [ 1, 2, 3, 4, 1, 2, 5, 1, 2, 3 ];

for(i=0;i<key.length;i++){
    arr = put(arr,key[i]);
}


