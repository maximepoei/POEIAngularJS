(function() {
    'use strict';
  
    function settingService() {
      var service = {};
      service.City = '';
      service.isCelsius = true;
      

      return service;
    }

    settingService.$inject = [];
    
    angular.module('daproject')
        .factory('settingService', settingService);
  
})();