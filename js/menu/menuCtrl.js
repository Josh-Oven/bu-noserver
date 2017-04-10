angular.module('bu').controller('menuCtrl', function($scope, textService){

$scope.searchTerm = textService.searchTerm;
console.log("$scope.searchterm", $scope.searchTerm)
console.log("textsvc", textService.searchTerm)
})
