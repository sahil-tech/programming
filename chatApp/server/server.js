/**
 * @description : Server(Backend)
 * @author : Harshit Sethi
 * @since : 09/18/19
 */

const express = require("express");
var cors = require('cors');
var socket = require('socket.io');
const userRoute = require("../server/routes/routes")
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const validator = require("express-validator")
const userController=require('../server/controller/userController');
require("dotenv").config();

//Start the server
app = express();

//BodyParser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
//Use express Validator
app.use(validator());

//Connect to Database
mongoose.connect(process.env.DataBase_Connection,
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


app.use(cors());
//Home Page
// app.get("/", (req, res) => {
//     res.send("Welcome to Home-Page");
// });

//Route for adding a new User
app.use("/users", userRoute);

//Start the server
const port = process.env.PORT || 3000;
var server=app.listen(port);
console.log("listening on 3000")

const io=socket(server);
//loads index.html file at client side 
app.use(express.static('../client'));

//socket connection 
io.on('connection', function(socket){
    console.log("connected to socket")
    //if socket is disconnected 
    socket.on('disconnect', function() {
        console.log("disconnected")
        });
        //when user emits a sending event takes data and stores message in database with sender details
        socket.on('sending', function(data) { 
           userController.chatConversation(data,(err,response)=>{
               if(response.status){
                   //emits after data is being stored successfully in db
                  io.sockets.emit("receiving",data.message);      
               }
           })
        });
});


