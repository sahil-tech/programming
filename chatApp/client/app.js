(() => {
    const app = angular.module("myApp", ["ngRoute"]);
    console.log("here");
    app.config(function ($routeProvider) {
        $routeProvider
            .when("/signup", { templateUrl: "views/signup.html" })
            .when("/login", { templateUrl: "views/signin.html" })
            .when("/resetPassword", { templateUrl: "views/resetPassword.html"})
            
    });

    app.controller("MyCtrl", myCtrl);

    function myCtrl($location, $http) {
        // this.email="email";
        // this.password="password";
        this.output = "";
        this.data = {};
        this.dataL = {};
        this.dataF = {};
        this.clickSignup = function () {
            $location.path("/signup");
        }
        this.clickLogin = function () {
            $location.path("/login");
        }
        this.clickresetPassword = function () {
            $location.path("/resetPassword");
        }
        this.addUser = function (name, email, password) {
            this.data = {
                name: name,
                email: email,
                password: password
            }
            $http({
                url: "http://localhost:3000/users/addUser",
                method: "POST",
                data: this.data
            }).then(response => {
                if (response) {
                    this.output = "User Adder";
                }
            })
                .catch(err => {
                    if (err) {
                        this.output = "Unable to add user";
                    }
                })
        }
        this.userLogin = function (email, password) {
            this.dataL = {
                email: email,
                password: password
            }
            $http({
                method: "POST",
                url: "http://localhost:3000/users/login",
                data: this.dataL
            })
                .then(response => {
                    if (response) {
                        //$http.defaults.headers.common['']=response.
                        this.outputL = "User Logged In";
                    }
                }).catch(err => {
                    if (err) {
                        this.outputL = "Sorry Error occured";
                    }
                })

        }
        this.resetPassword = function (password,confirmPassword) {
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
                    }
                }).catch(err => {
                    if (err) {
                        this.outputR = "Sorry Error occured";
                    }
                })

        }
        this.forgotPassword = function (email) {
            this.dataF = {
                email : email
            }
            $http({
                method: "POST",
                url: "http://localhost:3000/users/forgotPassword",
                data: this.dataF
            })
                .then(response => {
                    if (response) {
                        this.outputF = "link has been sent";
                    }
                }).catch(err => {
                    if (err) {
                        this.outputF = "Sorry Error occured";
                    }
                })

        }
    }
})();