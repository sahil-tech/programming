(() => {
    var app = angular.module("HS-chatApp");
    app.service("httpService",function ($http) {
        this.getService = () => {
            return $http.get("http://localhost:3000/users/getAllData").then(function (response) {
                return response.data;
            },
            function(error){
                return error.data;
            });
        }
        this.register=(user)=>{
            return $http.post("http://localhost:3000/users/addUser", user).then(function (response) {
                return response.data;
            },function(error){
                return error.data;
            });
        }
        this.postLoginService = (user) => {
            return $http.post("http://localhost:3000/users/login", user).then(function (response) {
                return response.data;
            },function(error){
                return error.data;
            });

        }

        this.fetchConversation=(chatData)=>{
            return $http.post("http://localhost:3000/users/fetchConversation",chatData).then(function(response){
                return response.data
        },function(error){
            console.log(error.data)
            return error.data;
        })
        }

    });
})();