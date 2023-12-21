/*Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */

function isNumber(value) {
    return typeof  parseInt(value) === 'number' && !isNaN(value);
}

var isValidSudoku = function(board) {
    
    let map = new Map();

    for(let i=0;i<board.length;i++)
    {   
        map.clear();

        for(let j=0;j<9;j++)
        {
            if(map.has(board[i][j]))
                return false;
            else if(isNumber(board[i][j]))
                map.set(board[i][j],1);
        }

    }

    for(let i=0;i<9;i++)
    {   
        map.clear();

        for(let j=0;j<board.length;j++)
        {
            if(map.has(board[j][i]))
                return false;
            else if(isNumber(board[j][i]))
                map.set(board[j][i],1);
        }

    }


    map.clear();

    for (let boxRow = 0; boxRow < 3; boxRow++) {
        for (let boxCol = 0; boxCol < 3; boxCol++) {
          
          map.clear();
          for (i = 0; i < 3; i++) 
          {
            for (j = 0; j < 3; j++)
            {
                if(map.has(board[boxRow*3+i][boxCol*3+j]))
                    return false;
                else if(isNumber(board[boxRow*3+i][boxCol*3+j]))
                    map.set(board[boxRow*3+i][boxCol*3+j],1);
                    
            }
          }
        }
    }   

    return true;
};

const board = [[".",".",".",".","5",".",".","1","."],
               [".","4",".","3",".",".",".",".","."],
               [".",".",".",".",".","3",".",".","1"],
               ["8",".",".",".",".",".",".","2","."],
               [".",".","2",".","7",".",".",".","."],
               [".","1","5",".",".",".",".",".","."],
               [".",".",".",".",".","2",".",".","."],
               [".","2",".","9",".",".",".",".","."],
               [".",".","4",".",".",".",".",".","."]];

console.log(isValidSudoku(board));