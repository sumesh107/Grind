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
}

// Example usage:
const grid = [
    [1, 1, 1, 1, 1],
    [1, 1, 0, 0, 0],
    [1, 0, 1, 1, 0],
    [0, 0, 1, 0, 0],
];

const targetColor = grid[2][2]; // The color at (2, 2)
const replacementColor = 2; // New color

floodFill(grid, 2, 2, targetColor, replacementColor);

// The grid after flood fill:
console.log(grid);