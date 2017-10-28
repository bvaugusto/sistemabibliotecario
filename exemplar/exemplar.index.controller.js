(function(){
    'use strict';
    angular.module('biblioteca')
        .controller('ExemplarController', ExemplarController);

    function ExemplarController(){
        /* jshint validthis: true */
        var vm = this;
        vm.titlePage =  'Exemplar';
        //vm.vitrine = new HomeService();
    }
})();