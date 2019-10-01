(() => {
    var app = angular.module("HS-chatApp", ["ngRoute"]);
    app.config(function ($routeProvider) {
        $routeProvider
            .when("/",{templateUrl : "templates/home.html"})
            .when("/signup", { templateUrl: "templates/signup.html" })
            .when("/login", { templateUrl: "templates/login.html" })
            .when("/resetPassword", { templateUrl: "templates/resetPassword.html"})
            .when("/forgotPassword", { templateUrl: "templates/forgotPassword.html"})
            .when("/chat", { templateUrl: "templates/chat.html" })
            .otherwise({
                templateUrl : "templates/home.html"
              });
            
    });
})();