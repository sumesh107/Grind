function inbounds(grid, x, y) {
    // Check if the current cell is out of bounds or has a different color
    if (
        x > -1 &&
        x < grid.length &&
        y > -1 &&
        y < grid[0].length &&
        grid[x][y] == 1
    ) {
        return true;
    }

 //   grid[x][y] = replacementColor;
    return false;
}    

function rotten(grid)
{
    let mins=0; let fresh = 0; let rotten = 0;
    let q = [];
    let direct = [[0,1],[0,-1],[1,0],[-1,0]];

    for(let i=0; i<grid.length; i++)
    {
        for(let j=0; j<grid[0].length; j++)
        {
            if( grid[i][j] == 1 )
            {
             fresh+=1;
            }
            else if( grid[i][j] == 2 )
            {
                rotten+=1;
                q.push([i,j]);
            }
        }
    }

    let x; let y;

// the loop for counting time     
    while(q.length > 0 && fresh > 0)
    {   
       len = q.length; 
      // loop for each element in queue
        for(let k=0;k<len;k++)
        {
        let curr = q.shift();
        // 4-way direction
            for(i=0;i<direct.length;i++)
            {   
                x=  Number.parseInt(curr[0]) + Number.parseInt(direct[i][0]);
                y = Number.parseInt(curr[1]) + Number.parseInt(direct[i][1]);

                if(!inbounds( grid,x,y ))
                {
                    continue;
                }
                else
                {
                    grid[x][y] = 2;
                    q.push([x,y]);
                    fresh= fresh-1;
                }     
            }
        }
        mins=mins+1; 
    }


    // after rottening we check for fresh oranges
    for(let i=0; i<grid.length; i++)
    {
        for(let j=0; j<grid[0].length; j++)
        {
            if(grid[i][j]==1)
             return -1;
        }
    }

     return mins;
}

const grid = [[2,1,1],[1,1,1],[0,1,2]];
//const grid = [[2,0,1,1,1,1,1,1,1,1],[1,0,1,0,0,0,0,0,0,1],[1,0,1,0,1,1,1,1,0,1],[1,0,1,0,1,0,0,1,0,1],[1,0,1,0,1,0,0,1,0,1],[1,0,1,0,1,1,0,1,0,1],[1,0,1,0,0,0,0,1,0,1],[1,0,1,1,1,1,1,1,0,1],[1,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1]]

console.log(" Number of minutes elapsed: "+ rotten(grid,1,2));