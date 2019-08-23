/**
 * @overview : to calculate distance
 * @description : to calculate distance betwwn origin and provided coordinates
 * @param {xCoordinate} x coordinate of the point whose distance is to be calculated 
 * @param {yCoordinate} y coordinate of the point whose distance is to be calculated 
 */
try{
var distance = (xCoordinate,yCoordinate) => {
    var dis= (Math.pow(xCoordinate,2)+Math.pow(yCoordinate,2));
    dis = Math.sqrt(dis);
    console.log("the distance is:" + dis);
}
}
catch(err){
    console.log("something is not good");
}
module.exports = {distance}