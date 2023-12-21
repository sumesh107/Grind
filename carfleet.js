/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
        let time = [];
        let tim;
        n = position.length;
        let stack = [];
    
        for(let i=0;i<n;i++)
        {
            tim = (target - position[i])/speed[i];  
            time.push([position[i],tim]);      
        }
    
        time = time.sort((a,b)=>b[0]-a[0]);
    
        stack.push(time[0]);

        for(i=1;i<n;i++)
        {
            if(time[i][1] <= stack[stack.length-1][1])
            {
                stack.pop();
                stack.push(time[i]);
            }
            else
            {
                stack.push(time[i]);
            }
        }

        return stack.length;
};

const target = 10;
const position = [0,4,2];
const speed = [2,1,3];

console.log(carFleet(target,position,speed));