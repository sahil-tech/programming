/**
* @description : Business Logic
*/

const userModel = require("../app/models/userModel");
const chatModel = require('../app/models/chatModel')
const bcrypt = require("bcryptjs");
const tokenFactory = require("../Middleware/token");
const mailerFactory = require("../Middleware/mail");

var rn = require('random-number');
var gen = rn.generator({
  min:  1000
, max:  9999
, integer: true
})


require("dotenv").config();

/**
 * @description : Hashing Password
 * @param {password} password is the password in plain text
 */

async function generatePassword(password) {
    const salt = await bcrypt.genSalt(10);
    var hashedPassword = await bcrypt.hash(password, salt);

    if (hashedPassword) return hashedPassword;
}

/**
 * @description : Verifying password with encrypted password
 * @param {givenPassword} password in plain text
 * @param {hashedPassword} encrypted password in database
 */
async function verifyPassword(givenPassword, hashedPassword) {
    return await bcrypt.compare(givenPassword, hashedPassword);
}


/**
 * @description : Geting data of all users in Database
 * @param {callback} : Callback function
 */
exports.getAllData = (callback) => {
    userModel.find({}, (err, data) => {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    })
}


/**
 * @description : Adding new User
 * @param {body} : body in Request Object
 * @param {callback} : Callback function
 */
exports.addUser = (body, callback) => {

    userModel.findOne({ email: body.email }, async (err, user) => { //Check if the email is taken
        if (err) callback(err);
        if (user) { //If Email already taken
            callback("Email already taken");
        } else {
            var user = new userModel({
                name: body.name,
                email: body.email,
                password: await generatePassword(body.password),//Hashing to hide passwords
                joined: new Date()
            });
            user.save((err, data) => {
                if (err) callback(err);
                else callback(null, data);
            });
        }
    });
}

/**
 * @description : Login with username and password and return a token
 * @param {body} : body in Request Object
 * @param {callback} : Callback function
 */
exports.logIn = (body, callback) => {
    userModel.findOne({ email: body.email }, async (err, user) => {
        if (!user) {
            callback(err);
        } else {
            //Compare the Password;
            var validPass = await verifyPassword(body.password, user.password);

            if (!validPass) { //Invalid Password
                callback("Invalid Password");
            } else { //Passwords match
                //Generate Token and return the token
                var token = tokenFactory.generateToken(user);
                callback(null, token);
            }
        }
    });
}

/**
 * @description : reseting password 
 * @param {body} : body in Request Object
 * @param {callback} : Callback function
 */
exports.resetPassword = async (req, callback) => {
    
    if (!req.decode) {
        callback("Invalid Token");
    } else {
        userModel.findOneAndUpdate({ email: req.decode.email },
            { $set: { password: await generatePassword(req.body.password) } },
            (err, doc) => {
                if (err) callback(err);
                else callback(null, doc);
            });
    }
}

/**
 * @description : Sending a mail to user if password is forgotten
 * @param {body} : body in Request Object
 * @param {callback} : Callback function
 */
exports.forgotPassword = (body, callback) => {
    userModel.findOne({ email: body.email }, async (err, user) => {
        if (err) callback(err);
        if (!user) {
            callback("User Not Found");
        } else {
            // Send Mail to User with a token
            // var token = tokenFactory.generateToken(user);
            var defaultpass = ((user.name).toString())+gen();
            mailerFactory.sendMail(defaultpass, body, (err, data) => {
                if (err) {

                    callback(err);
                } else callback(null, data);
            });
            userModel.findOneAndUpdate({ email: body.email },
                { $set: { password : await generatePassword(defaultpass)} },
                (err, doc) => {
                    if (err) callback(err);
                    else callback(null, doc);
                });
        }
    });
    
}

exports.chatConversation = (chatData, callback) => {
    var fromTO = {
        $or: [{ sender: chatData.sender, receiver: chatData.receiver },
        { sender: chatData.receiver, receiver: chatData.sender }
        ]
    };
    chatModel.findOne(fromTO)
        .then((data) => {

            let tempMessages = data.conversations;
            tempMessages.push({ sender: chatData.sender, message: chatData.message });
            chatModel.findOneAndUpdate(fromTO, { $set: { conversations: tempMessages } }, { new: true })
                .then((result) => {
                    callback(null, result)
                }).catch((err) => {
                    callback("could not update your messages")
                })
        }).catch(() => {
            var chat = new chatModel({ sender: chatData.sender, receiver: chatData.receiver, conversations: [{ sender: chatData.sender, message: chatData.message }] });
            chat.save();
            callback(null, chat);

        })
}

exports.fetchConversation = (body, callback) => {
    var fromTO = {
        $or: [{ sender: body.sender, receiver: body.receiver },
        { sender: body.receiver, receiver: body.sender }
        ]
    };
    chatModel.findOne(fromTO)
        .then((data) => {
            if (data) {
                callback(null, data)
            }
            else {
                callback("NO messages to show")
            }
        }).catch((err) => {
            callback("NO Messages to show " + err);
        })
}