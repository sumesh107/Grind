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
    let q = [];

    // adding the zeros to the queue.
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if(mat[i][j]===0){
                q.push([i,j]);
            }
     }
    }       
    
    let k;
    k = q.length;

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
    // when 1 encounters, check distance of zeros from 1        
            if(mat[i][j]===1){
                let dist = Number.MAX_VALUE;
            for(let l=0;l<k;l++){
                let ma = q.shift();
                if(mat[i][j]===1){
                    dist = Math.min(dist,distance(ma,[i,j]));
                }    
                q.push(ma);
            }
            mat[i][j] = dist;
        }
    } 
 }    
};


var matris = [[0,0,0],[0,1,0],[1,1,1]];
updateMatrix(matris);