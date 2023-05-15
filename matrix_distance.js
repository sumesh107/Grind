// Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

// The distance between two adjacent cells is 1.


/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

var distance = function(cord1,cord2){
    let row1 = cord1[0];
    let col1 = cord1[1];
    let row2 = cord2[0];
    let col2 = cord2[1];

    return Math.abs(row2-row1) + Math.abs(col2-col1);
}

var updateMatrix = function(mat) {
    
};