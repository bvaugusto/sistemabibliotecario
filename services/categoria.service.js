(function () {
    'use strict';
    angular.module('biblioteca')
        .factory('CategoriaService', CategoriaService);

    function CategoriaService($resource) {
        return $resource(
            'http://sistemabibliotecarioapi.brunoaugusto.eti.br/api/categoria/:id',
            {id: '@id'},
            {update:{method: 'PUT'}}
        );
    }
})();