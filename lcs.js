// Find the longest common subsequence between two strings
// --------recursion--------//
const subsequence = function (arr1,arr2,i,j) {

    if( i>= arr1.length || j>= arr2.length)
        return 0;
    
    if(arr1[i]==arr2[j])
     return 1+ subsequence(arr1,arr2,i+1,j+1);

    return Math.max ( subsequence(arr1,arr2,i+1,j) , subsequence(arr1,arr2,i,j+1) );
}

console.log( subsequence("ATAAT","GXTXAYB",0,0) );
//---- recusrsion ------//

//------- dp ------------//

const subseq = function (arr1,arr2){
    dp = new Array(arr1.length+1);

    for(let i=0;i<=arr1.length;i++)
        dp[i] = new Array(arr2.length+1);

    console.log(dp);

    for(let i=0;i<=arr1.length;i++){
        for(let j=0;j<=arr2.length;j++){
        if (i == 0 || j == 0)
                dp[i][j] = 0;

        else if(arr1[i-1]==arr2[j-1])
            dp[i][j] = 1+ dp[i-1][j-1];
        else
            dp[i][j] = Math.max( dp[i-1][j],dp[i][j-1] )

        }
    }
    return dp[arr1.length,arr2.length];
}

console.log ( subseq("AXP","GAP") );
  


 