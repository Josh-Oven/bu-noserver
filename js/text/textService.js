angular.module('bu').service('textService', function($http){

this.getData = function(){
  return $http.get('storage.json').then(function(response){
    return response.data;
  })
}

this.searchTerm = ''

})


//
