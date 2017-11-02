(function () {
    'use strict';
    angular.module('biblioteca')
        .factory('LeitorService', LeitorService);

    function LeitorService($resource) {
        return $resource(
            'http://www.sistemabibliotecarioapi.dev/api/leitor/:id',
            {id:'@id'},
            {update:{method:'PUT'}}
        );
    }
})();