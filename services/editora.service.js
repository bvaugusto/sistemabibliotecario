(function () {
    'use strict';
    angular.module('biblioteca')
        .factory('EditoraService', EditoraService);

    function EditoraService($resource) {
        return $resource(
            'http://sistemabibliotecarioapi.brunoaugusto.eti.br/api/editora/:id',
            {id: '@id'},
            {update:{method: 'PUT'}}
        );
    }
})();