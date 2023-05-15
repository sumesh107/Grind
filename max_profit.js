var maxProfit = function(prices) {
    var profit =0;

    for(var i=0;i < prices.length - 1; i=i+1){
        for(var j=i+1;j < prices.length; j=j+1){
            profit = Math.max(profit,prices[j]-prices[i]);
        }
    }
    return profit;
};

console.log(" Profit = "+ maxProfit([7,1,5,3,6,4]));