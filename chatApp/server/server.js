 /**
 * @description : Server
 * @author : Vaibhav Pratihar
 * @since : 08/20/19
 */

const express = require("express");
const userRoute = require("../server/routes/routes")
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const validator = require("express-validator")
require("dotenv").config();

//Start the server
app = express();

//BodyParser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Use express Validator
app.use(validator());

//Connect to Database
mongoose.connect(process.env.DBPATH,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true//used for unique entities in Schema
    }).catch(error => console.error(error));//Handling Initial Errors in Connecting to Databases

//Successful Connection to Database
mongoose.connection.on('open', () => {
    console.log("Connected to database");
    mongoose.set('useFindAndModify', false);//Remove Depreciated Warning while changing password

});

//Database disconnected or Database Off
mongoose.connection.on('disconnected', () => {
    console.log("Database Offline");
});

//Error in connecting to Database
mongoose.connection.on('error', (err) => {
    if (err) {
        console.log("There was an error connecting to database");
    }
});


// //To access data on client side
// app.use((req,res,next)=>{
//     res.header('Access-Control-Allow-Origin','*');
//     res.header('Access-Control-Allow-Headers','*');      //Instead of * request may be Origin,Content-Type etc. 

//     if(req.method==='OPTIONS'){
//         res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
//         return res.status(200).json({});
//     }
//     next();
// })

//Route for adding a new User
app.use("/users", userRoute);

//Start the server
const port = process.env.PORT || 3000;
app.listen(port);
console.log("listening on 3000")


// app.use(express.static("../client"));
