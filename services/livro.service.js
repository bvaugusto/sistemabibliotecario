(function () {
    'use strict';
    angular.module('biblioteca')
        .factory('LivroService', LivroService);

    function LivroService($resource) {
        return $resource(
            'http://sistemabibliotecarioapi.brunoaugusto.eti.br/api/livro/:id',
            {id: '@id'},
            {update:{method: 'PUT'}}
        );
    }
})();