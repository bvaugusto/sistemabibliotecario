(function () {
    'use strict';
    angular.module('biblioteca')
        .factory('EditoraService', EditoraService);

    function EditoraService($resource) {
        return $resource(
            'http://www.sistemabibliotecarioapi.dev/api/editora/:id',
            {id: '@id'},
            {update:{method: 'PUT'}}
        );
    }
})();