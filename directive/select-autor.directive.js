(function () {
    'use strict';
    angular.module('biblioteca')
        .directive('selectAutor', selectAutor);

    // 'A' - only matches attribute name | corresponde apenas o nome do atributo
    // 'E' - only matches element name | corresponde apenas nome do elemento
    // 'C' - only matches class name | corresponde apenas o nome da classe
    // 'M' - only matches comment | corresponde apenas comentário

    function selectAutor() {

        return {
            restrict: 'E',
            required: 'ngModel',
            scope: {
                autor: '=ngModel'
            },
            templateUrl: './directive/select-autor.directive.html',
            bindToController: true,
            controller: selectAutorController,
            controllerAs: 'vm'
        };

        function selectAutorController(AutorService) {
            var vm = this;
            vm.listarAutores = AutorService.query({sort:'nome'});
        }

    }
})();
