/**
 * @description : read the input string and make changes according to problem statement
 * @since : 04-09-2019
 * @author : sahil jindal
 */
const expressionObject = require('../expression/expressionBl');
var str = "Hello <<name>> , we have your full name as <<full name>> in our system . your contatct number is <<xxxxxxxxxx>> .thankyou from bridgelabs <<01-01-2016>>";
console.log(expressionObject.expression(str));