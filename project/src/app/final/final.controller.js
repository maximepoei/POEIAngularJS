(function() {
  'use strict';

function  finalCtrl($location, searchConfigService, cocktailSearchService, cocktailElement) {
    var vm = this;
    vm.getIng = getIng;
    vm.serviceConf = searchConfigService;
    vm.serviceCocktail = cocktailSearchService;
    vm.Ing = vm.serviceConf.ingredient;
    vm.dir = cocktailElement;
    
    function getIng(){
      vm.Ing = vm.serviceConf.ingredient;
      vm.serviceCocktail.getCocktails();


    }

    
}



  finalCtrl.$inject = ['$location', 'searchConfigService', 'cocktailSearchService'];

  angular.module('daproject')
    .controller('finalCtrl', finalCtrl);

})();