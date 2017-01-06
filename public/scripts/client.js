console.log('js');

var myApp = angular.module('myApp', []);

myApp.controller('AssignmentController', ['$scope', '$http', function($scope, $http) {
    console.log('NG');
    $scope.postAssignment = function() {
        // console.log('searching for:', kitties);
        // make http call
        var kitties = {assignment_name: $scope.assignmentIn,
          student_name: $scope.studentIn,
          score: $scope.scoreIn,
          date_completed: $scope.dateIn};
          console.log('searching for:', kitties);
        $http({
            method: 'POST',
            url: '/',
            //data to send
            data: kitties
        }).then(function(response) {
            console.log('response:', response);
        });
    }; // end postAssignment
      $http({
        method: 'GET',
        url: '/'
      }).then(function(response){
        $scope.searchResults = response.data;
      });

}]);
