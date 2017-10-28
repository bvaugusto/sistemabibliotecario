(function () {
    'use strict';
    angular.module('biblioteca')
        .factory('CategoriaService', CategoriaService);

    function CategoriaService($resource) {
        return $resource(
            'http://www.sistemabibliotecarioapi.dev/api/categoria/:id',
            {id: '@id'},
            {update:{method: 'PUT'}}
        );
    }
})();