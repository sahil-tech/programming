const router = require("express").Router();
const userController = require("../controller/userController")
const tokenFactory = require("../Middleware/token")

//Users HomePage
router.get("/getAllData",userController.getAllData);

//Adding a new User
router.post("/addUser",userController.addUser);

//login with email and password
router.post("/login",userController.logIn);

//reset password
router.post("/resetPassword",tokenFactory.verifyToken,userController.resetPassword);

//forgot Password
router.post("/forgotPassword",userController.forgotPassword);

//fetches conversation between sender and receiver 
router.post('/fetchConversation',userController.fetchConversation);

module.exports = router;