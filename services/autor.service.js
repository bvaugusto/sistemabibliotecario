(function () {
    'use strict';
    angular.module('biblioteca')
        .factory('AutorService', function($resource) {
            return $resource(
                'http://www.sistemabibliotecarioapi.dev/api/autor/:id',
                // { method: 'getTask', q: '*' }, // Query parameters
                {id: '@id'},
                {update:{method: 'PUT'}}
            );
        });

    // function AutorService($resource) {
    //     return $resource(
    //         'http://www.sistemabibliotecarioapi.dev/api/autor/:id',
    //         {
    //             id: '@id'
    //         },
    //         {
    //                 'get':    {method:'GET'},
    //                 'save':   {method:'POST'},
    //                 'query':  {method:'GET', isArray:true},
    //                 'remove': {method:'DELETE'},
    //                 'delete': {method:'DELETE'}
    //             });
    // }
})();