
var app=angular.module("myApp");
app.controller("myController",function($scope,gitService,gitRepoService){
    $scope.displayProfile=true;
    $scope.displayError=true;
    $scope.displayRepo=false;
 
    $scope.searchGit=function(){
        gitService.async($scope.username).then(function success(response){
            $scope.details=response;

            $scope.displayError=true;
            $scope.displayProfile=false;
            $scope.displayRepo= !$scope.displayRepo;

            $scope.myRepoFunc=function(){
                gitRepoService.async($scope.username).then(function success(response){
                    $scope.repoDetails=response;
                    $scope.displayRepo= !$scope.displayRepo;



                });
            };
        },function error(response){
            $scope.errorMessage="Please enter valid username";
            $scope.displayProfile=true;
            $scope.displayError=false;
        });

    }

});
