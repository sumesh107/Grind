function floodFill(grid, x, y, targetColor, replacementColor) {
    // Check if the current cell is out of bounds or has a different color
    if (
        x < 0 ||
        x >= grid.length ||
        y < 0 ||
        y >= grid[0].length ||
        grid[x][y] !== targetColor
    ) {
        return;
    }

    // Change the color of the current cell
    grid[x][y] = replacementColor;
    
    // Recursively fill adjacent cells
    floodFill(grid, x + 1, y, targetColor, replacementColor);
    floodFill(grid, x - 1, y, targetColor, replacementColor);
    floodFill(grid, x, y + 1, targetColor, replacementColor);
    floodFill(grid, x, y - 1, targetColor, replacementColor);
    floodFill(grid, x-1, y - 1, targetColor, replacementColor);
    floodFill(grid, x + 1, y + 1, targetColor, replacementColor); //upward-right side traversal
    floodFill(grid, x - 1, y - 1, targetColor, replacementColor); //downward-left side traversal
    floodFill(grid, x + 1, y - 1, targetColor, replacementColor); //downward-right side traversal
    floodFill(grid, x - 1, y + 1, targetColor, replacementColor); //upward-left side traversal

}

// Example usage:
const grid = [
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
];

//const grid1 = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]];

const targetColor = 1; // The color at (2, 2)
const replacementColor = 0; // New color
let count=0;



// The grid after flood fill:
for (let i =0; i < grid.length; i++)
{
    for (let j =0; j < grid[0].length; j++)
    {
        if(grid[i][j]==1)
        {
                    count+=1;
                    floodFill(grid, i, j, targetColor, replacementColor)
        }
    }
}    

console.log(count);