const min_speed = (piles,hour)=>{
    let k=1;
    let index;

    let max = Number.MIN_SAFE_INTEGER;
    let range = [];

    for(index=0;index<piles.length;index++)
    {
        if(piles[index] > max)
         max = piles[index];
    }

    for(index=1;index<=max;index++)
    {
        range[index-1] = index;
    }

    let l=0;
    let r= range.length-1;


    while(l <= r)
    {   
        sum = 0;
        mid = Math.floor((l+r)/2);
        k = range[mid];

        for(index=0;index<piles.length;index++)
        {
            sum = sum + Math.ceil(piles[index]/k);
        } 

        if( sum == hour)
            return k;

        else if( sum > hour)
            l=mid+1;

        else
            r=mid-1;
    }
}

const piles = [30,11,23,4,20];
const hour = 6;

console.log(min_speed(piles,hour));