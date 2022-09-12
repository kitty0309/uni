var myModule = angular.module('myModule', []);
myModule.controller('ModValue', function($scope) 
{
  $scope.array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  $scope.value;
  $scope.objNewArray = [];
  $scope.Multiplication = function()
  {
    $scope.newValue=$scope.value
    $scope.newArray = $scope.array.map(function(item){return $scope.newValue * item });
    $scope.objNewArray.push($scope.newArray)
    console.log($scope.objNewArray)
  }
});