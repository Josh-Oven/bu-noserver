angular.module('bu').directive('bumenu', function(){

  return {
    restrict: 'E',
    templateUrl: '../views/menuTmplt.html',
    scope: {
      input: "=",
      searchTerm: "="
    },
    link: function (scope, ele, attr) {
      console.log(scope)
    },
    controller: function($scope, textService) {
      $scope.shit = 'shit'
      console.log("$scope.input", $scope.input)
      console.log("searchTerm", $scope.searchTerm)
    }
    }

})
