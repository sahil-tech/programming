(() => {
    var app = angular.module("HS-chatApp");
    app.controller("MyCtrl", myCtrl);

    var socket = io.connect("http://localhost:3000");

    app.value("sender", "");

    var sender = null;

    function myCtrl($scope, $location, httpService,$http) {

        this.clickSignup = function () {
            $location.path("/signup");
        }

        this.clickLogin = function () {
            $location.path("/login");
        }
        this.clickresetPassword = function () {
            $location.path("/resetPassword");
        }
        this.clickforgotPassword = function () {
            $location.path("/forgotPassword");
        }
        this.logout = function () {
            $location.path("/");
        }

        this.dataF={}
        this.dataR={}
        var self = this;
        this.output = "";
        this.flag = false;

        this.register = function (name, email, password) {
            var user = {
                name: name,
                email: email,
                password: password
            }
            httpService.register(user)
                .then((response) => {
                    if (response) {
                        self.output = "User Added";
                        self.name = "";
                         self.email = "";
                        self.password = "";
                        alert("User Added");
                        $location.path("/login");
                    }
                    else {

                        self.output = "error is occured";
                    }
                });
        }

        this.signin = function (email, password) {
            sender = email;
            this.user = { email: email, password: password }
            httpService.postLoginService(this.user)
            .then((response) => {
                if (response) {
                    self.output = "User Logged In";
                    $http.defaults.headers.common['auth-token'] = response
                    alert("Logged in");
                    $location.path("/chat");

                    httpService.getService()
                    .then((response) => {
                        if (response){
                            this.details = [];
                            for(let i=0;i<response.data.length;i++){
                                if(response.data[i].email != sender)
                                this.details.push(response.data[i].email)
                            }
                        }
                        else
                            self.details = response.error;
                    });
                }
                else {
                    self.output = "error occured";
                }
            });
            self.username = ""
            self.password = ""
        }

        this.chatHistory = (receiver) => {
            this.flag = true;
            this.receiver = receiver;
            $scope.fetch();
        }

        $scope.fetch = () => {
            console.log(sender + " " + this.receiver);
            httpService.fetchConversation({ sender: sender, receiver: this.receiver })
                .then((response) => {
                    if (response)
                        this.messagesPacket = response.message.conversations;
                    else
                        this.messagesPacket = response.error;
                });
        }

        this.send = (message) => {
            if (message != "" && message != null && message != undefined) {
                var chatData = { sender: sender, receiver: this.receiver, message: message }
                socket.emit('sending', chatData);
            }
            else {
                alert("Please enter some text ");
            }
        }

        socket.on('receiving', function (responseMessage) {
            $scope.fetch();
        })

        this.resetPassword = function (password, confirmPassword) {
            this.dataR = {
                password: password,
                confirmPassword: confirmPassword
            }
            $http({
                method: "POST",
                url: "http://localhost:3000/users/resetPassword",
                data: this.dataR
            })
                .then(response => {
                    if (response) {
                        this.outputR = "Password changed";
                        $location.path("/login")
                    }
                }).catch(err => {
                    if (err) {
                        this.outputR = "Sorry Error occured";
                    }
                })

        }
        this.forgotPassword = function (email) {
            this.dataF = {
                email: email
            }
            $http({
                method: "POST",
                url: "http://localhost:3000/users/forgotPassword",
                data: this.dataF
            })
                .then(response => {
                    if (response) {
                        this.outputF = "link has been sent";
                        $location.path("/login")
                    }
                }).catch(err => {
                    if (err) {
                        this.outputF = "Sorry Error occured";
                    }
                })

        }
        this.alignMessageRight = (userId) => {
            return userId == sender ? true : false;
        }
        this.alignMessageLeft = (userId) => {
            return userId == sender ? false : true;
        }
       

    }
})();