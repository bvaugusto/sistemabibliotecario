(function(){
    'use strict';
    angular.module('biblioteca')
        .controller('EmprestimoController', EmprestimoController);

    function EmprestimoController(){
        /* jshint validthis: true */
        var vm = this;
        vm.titlePage =  'Empréstimo';
        //vm.vitrine = new HomeService();
    }
})();