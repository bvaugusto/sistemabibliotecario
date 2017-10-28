(function () {
    'use strict';
    angular.module('biblioteca')
        .directive('selectCategoria', selectCategoria);

    // 'A' - only matches attribute name | corresponde apenas o nome do atributo
    // 'E' - only matches element name | corresponde apenas nome do elemento
    // 'C' - only matches class name | corresponde apenas o nome da classe
    // 'M' - only matches comment | corresponde apenas comentário

    function selectCategoria() {

        return {
            restrict: 'E',
            required: 'ngModel',
            scope: {
                categoria: '=ngModel'
            },
            templateUrl: './directive/select-categoria.directive.html',
            bindToController: true,
            controller: selectCategoriaController,
            controllerAs: 'vm'
        };

        function selectCategoriaController(CategoriaService) {
            var vm = this;
            vm.listarCategorias = CategoriaService.query({sort:'nome'});
        }

    }
})();
