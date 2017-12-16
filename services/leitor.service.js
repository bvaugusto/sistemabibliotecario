(function () {
    'use strict';
    angular.module('biblioteca')
        .factory('LeitorService', LeitorService);

    function LeitorService($resource) {
        return $resource(
            'http://sistemabibliotecarioapi.brunoaugusto.eti.br/api/leitor/:id',
            {id:'@id'},
            {update:{method:'PUT'}}
        );
    }
})();