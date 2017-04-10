angular.module('bu').directive('directcard', function(){
  return {
    restrict: 'E',
    templateUrl: './views/directoryDirectiveTmplt.html',
    controller: function($scope, textService){

      $scope.searchTerm = textService.searchTerm;

    }
  }
})
