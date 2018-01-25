(function() {
 'use strict';
    
    angular.module('daproject')
   .directive('cocktailElement', function() {
     return {
       templateUrl: 'src/components/cocktail/cocktail.html',
       restrict: 'E',
       bindToController: {
          photo = 
          nom =
       },
    scope: {},
       controller: 'cocktailCtrl',
       controllerAs: 'coke'
     };
   });

})();