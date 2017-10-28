(function () {
    'use strict';
    angular.module('biblioteca')
        .factory('LivroService', LivroService);

    function LivroService($resource) {
        return $resource(
            'http://www.sistemabibliotecarioapi.dev/api/livro/:id',
            {id: '@id'},
            {update:{method: 'PUT'}}
        );
    }
})();