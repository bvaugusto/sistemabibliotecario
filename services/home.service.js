(function () {
    'use strict';
    angular.module('biblioteca')
        .factory('HomeService', HomeService);

    function HomeService($resource) {
        return $resource(
            'http://sistemabibliotecarioapi.brunoaugusto.eti.br/api/home'
            // {id: '@id'},
            // {
            //     'query':  {method:'GET', isArray:true}
            // }
            //'query':  {method:'GET', isArray:true},
        );
    }
})();