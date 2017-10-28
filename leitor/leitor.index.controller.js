(function(){
    'use strict';
    angular.module('biblioteca')
        .controller('LeitorController', LeitorController);

    function LeitorController(){
        /* jshint validthis: true */
        var vm = this;
        vm.titlePage =  'Leitor';
        //vm.vitrine = new HomeService();
    }
})();