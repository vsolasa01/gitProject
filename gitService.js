
var app=angular.module("myApp");

app.factory('gitService', function($http) {
    var gitService = {
        async: function(username) {
            // $http returns a promise, which has a then function, which also returns a promise
            var promise = $http.get("https://api.github.com/users/"+username)
                                .then(function success(response) {
                                        return response.data;
                                        });
            
            return promise;
        }
    };
    return gitService;
});