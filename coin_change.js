// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var count = function(coins,index,amount){

    if(amount == 0)
     return 1;
    
    if(amount < 0 || index < 0)
     return 0;
    
    return( count(coins,index-1,amount) + count(coins,index,amount-coins[index])) 
}

var coinChange = function(coins, amount) {
    let num = coins.length - 1;
    let min = Number.POSITIVE_INFINITY;

    min = Math.min( count(coins,num,amount), min);
    return min;
};

const coins = [1,2,5];
const amount = 11;

console.log( coinChange(coins,amount) );



