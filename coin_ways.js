// no of ways in which coins can be summed to get an amount

// var ways = function(coins,index,amount){

//     // if we get amount to be zero then thats the way.
//     if(amount==0)
//      return 1;

//      if(index < 0 || amount < 0)
//       return 0;
     
//      return ways(coins,index,amount - coins[index]) + ways(coins,index-1,amount); 
// };

//  coins =[1,2];
// amount = 3;
// index = coins.length - 1;
// // console.log( ways(coins,index,amount) );

// var ways = function(coins,index,amount){

//     var dp = new Array(index);

//     for(let i=0;i<=index;i++){
//         dp[i] = new Array(amount);
//     }

//     for(let i=0;i<=index;i++){
//         for(let j=0;j<=amount;j++){
//             if(i==0)
//              dp[i][j] = 0;
//             if(j==0&&i!=0)
//                 dp[i][j] = 1;
//         }
//     }

//     for(let i=1;i<=index;i++){
//         for(let j=1;j<=amount;j++){
//             if( i < 0|| j <0 )
//                 return 0;
            
//             if(j >= coins[i])
//              dp[i][j] = dp[i][j-coins[i]] 
           
//            if(dp[i][j])  
//             dp[i][j] += dp[i-1][j];
//            else
//             dp[i][j] = dp[i-1][j];
//         }
//     }

//     return dp[2,3];
// }


var ways = function(coins,index,amount){
    var dp = new Array(index).fill(1);

    for(let i=0;i<=index;i++){
        dp[i] = new Array(amount);
        dp[i][0] = 1;
    }

        for(let j=0;j<=amount;j++){
            dp[0][j] = 0;        
        }
    
 
    for(let i=1;i<=index;i++){
       for(let j=1;j<amount;j++){
        if(coins[i] > j)
            dp[i][j] = dp[i-1][j];
        else
            dp[i][j] = dp[i][j-coins[i-1]] + dp[i-1][j];
       }
    }   
    
    return dp[index-1][amount];
}

coins =[1,2];
amount = 3;
index = coins.length;

console.log( ways(coins,index,amount) );