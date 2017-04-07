angular.module('bu').directive('bumenu', function(){

  return {
    restrict: 'E',
    templateUrl: '../views/menuTmplt.html',
    link: function(scope, element, attrs){
      if(scope.test === false){
        // menu animation

      }
    }
  }
})
