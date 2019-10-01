/**
 * @description : Input-Output Validation 
 */

const userServices = require('../Services/userServices')


/**
 * @description : Geting data of all users
 * @param {req} : Request Body
 * @param {res} : Response
 */
exports.getAllData = (req, res) => {

    var response = {}

    userServices.getAllData((err, data) => {
        if (err) {
            response.state = false;
            response.error = err;

            res.status(404).send(response);
        } else {
            response.status = true;
            response.data = data;
            res.status(200).send(response)
        }
    });


}

/**
 * @description : Adding new User
 * @param {req} : Request Body
 * @param {res} : Response
 */
exports.addUser = (req, res) => {
    var response = {}

    req.checkBody('name', 'Invalid Name or Length of Name').isString().isLength({ min: 3 });
    req.checkBody('email', 'Invalid Email Id').isEmail();
    req.checkBody('password', 'Invalid Password Length').isString().isLength({ min: 3 });

    req.getValidationResult().then((err) => {
        if (err.isEmpty()) {
            userServices.addUser(req.body, (err, data) => {
                if (err) {
                    response.state = false;
                    response.error = err; //Any error in saving
                    res.status(422).send(response);
                }
                else {
                    response.state = true;
                    response.data = data;

                    res.status(200).send(response);
                }
            });
        } else {
            response.state = false;
            response.error = err; // Any error in adding new User
            res.status(500).send(response);
        }
    });
}

/**
 * @description : Log-in with email and ID
 * @param {req} : Request Body
 * @param {res} : Response
 */
exports.logIn = (req, res) => {
    var response = {}

    req.checkBody('email', 'Invalid Email Address').isEmail();
    req.checkBody('password', 'Invalid Password Length').isString().isLength({ min: 3 });

    req.getValidationResult().then(err => {
        if (err.isEmpty()) {
            userServices.logIn(req.body, (err, data) => {
                if (!err) {
                    //response.state = true;
                    response.data = data;

                    res.status(200).send(data);
                } else {
                    response.state = false;
                    response.error = err;
                    res.status(500).send(response);
                }
            });
        }
    });
}

/**
 * @description : Reset Password
 * @param {req} : Request Body
 * @param {res} : Response
 */
exports.resetPassword = (req, res) => {
    var response = {}

    req.checkBody('password', 'Invalid Password Length').isString().isLength({ min: 3 });
    req.checkBody('confirmPassword', 'Invalid Password Length').isString().isLength({ min: 3 });

    if (req.body.password !== req.body.confirmPassword) {
        response.data = "passwords don't match";
        res.status(422).send(response);
    }

    req.getValidationResult().then((err) => {
        if (err.isEmpty()) {
            userServices.resetPassword(req, (err, data) => {
                if (!err) {
                    response.state = true;
                    response.data = data;

                    res.status(200).send(response);
                } else {
                    response.state = false;
                    response.error = err;
                    res.status(422).send(response);
                }
            });
        }
    });

}

/**
 * @description : sending a mail if password forgotten
 * @param {req} : Request Body
 * @param {res} : Response
 */
exports.forgotPassword = (req, res) => {
    var response = {}

    req.checkBody('email', 'Invalid Email Address').isEmail();
    req.getValidationResult().then((err) => {
        if (err.isEmpty()) {
            userServices.forgotPassword(req.body, (err, data) => {
                if (!err) {
                    response.state = true;
                    response.data = data;

                    res.status(200).send(response);
                } else {
                    response.state = false;
                    response.error = err;
                    res.status(404).send(response);
                }
            })
        } else {
            response.state = false;
            response.error = err;
            res.status(500).send(response);
        }
    });
}

exports.chatConversation = (chatData,callback) => {

    var response={};
    userServices.chatConversation(chatData, (err, data) => {
        if (err) {
            response.error = "Some error occured ";
            response.status = false;
            //res.send(response);
            callback(response)
        }
        else {
            response.message = data;
            response.status = true;
            //res.send(response);
            // return response;
            callback(null,response)
        }

    })
}

exports.fetchConversation=(req,res)=>{
    var response={}
    userServices.fetchConversation(req.body,(err,data)=>{
        if (err) {
            response.error = [{message:err}];
            response.status = false;
            //res.send(response);
            res.status(404).send(response);
        }
        else {
            response.message = data;
            response.status = true;
            //res.send(response);
            // return response;
            res.status(200).send(response);
        }
    });
}