console.log('js');

var myApp = angular.module('myApp', []);

myApp.controller('AssignmentController', ['$scope', '$http', function($scope, $http) {
    console.log('NG');
    $scope.postAssignment = function() {
        console.log('searching for:', $scope.assignmentPost);
        // make http call
        var kitties = $scope.assignmentPost;
        $http({
            method: 'POST',
            url: '/',
            //data to send
            data: kitties
        }).then(function(response) {
            console.log('response:', response);
        });
    }; // end postAssignment

}]);
