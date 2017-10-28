(function(){
    'use strict';
    angular.module('biblioteca')
        .controller('HomeController', HomeController);

    function HomeController(HomeService){
        var vm = this;
        vm.homeService = HomeService.query();
    }
})();