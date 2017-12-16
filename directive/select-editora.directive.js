(function () {
    'use strict';
    angular.module('biblioteca')
        .directive('selectEditora', selectEditora);

    // 'A' - only matches attribute name | corresponde apenas o nome do atributo
    // 'E' - only matches element name | corresponde apenas nome do elemento
    // 'C' - only matches class name | corresponde apenas o nome da classe
    // 'M' - only matches comment | corresponde apenas comentário

    function selectEditora() {

        return {
            restrict: 'E',
            required: 'ngModel',
            scope: {
                editora: '=ngModel'
            },
            templateUrl: './directive/select-editora.directive.html',
            bindToController: true,
            controller: selectEditoraController,
            controllerAs: 'vm'
        };

        function selectEditoraController(EditoraService) {
            var vm = this;
            vm.listarEditoras = EditoraService.query({sort:'nome'});
        }

    }
})();
