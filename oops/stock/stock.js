/**
 * @description : to print stock related information
 * @since : 04-09-2019
 * @author : sahil jindal
 */
const input = require('readline-sync');
const stockObject = require('../stock/stockBl')
var so = new stockObject.stock();
var n = input.question("enter number of stocks");
for(let i=0;i<n;i++){
    var stockName = input.question("enter stock name");
    var numberOfShare = input.question("enter number of shares");
    var sharePrice = input.question("enter share price");
    var tcost = so.value(numberOfShare , sharePrice , stockName);
    var cost = 0;
    cost = cost + tcost;
}
console.log("total cost is :  " + cost);