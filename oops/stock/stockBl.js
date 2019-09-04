/**
 * @description : to print out stock details.
 */
class stock {
    constructor(stockName , numberOfshare , sharePrice) {
        this.stockName = stockName;
        this.numberOfShare = numberOfshare;
        this.sharePrice = sharePrice;
    }
    /**
     * @description : to calculate total cost of each stock
     * @param {*} numberOfShare : number of shares
     * @param {*} sharePrice : price of each share
     * @param {*} stockName : name of stock to which share belong
     */

    value(numberOfShare , sharePrice , stockName){
        var totalCost ;
        var totalCost =   numberOfShare*sharePrice;
        console.log("the value of " + stockName + " is : " + totalCost )
        return totalCost;
    }

}
module.exports = {stock}