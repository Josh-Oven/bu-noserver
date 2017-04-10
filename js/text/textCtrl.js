angular.module('bu').controller('textCtrl', function($scope, textService, $stateParams){
$scope.test = true;
$scope.test2 = false;



$scope.getNewsData = function(){
  textService.getData().then(function(response){
    $scope.newsData = response;

    for(var i = 0; i < $scope.newsData.length; i++){
      if($scope.newsData[i].id == ($stateParams.id)){
        $scope.article = $scope.newsData[i];
      }
    }
  })
}

$scope.searchIf = true;


$scope.getNewsData();




});
