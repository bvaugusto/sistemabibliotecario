(function(){
    'use strict';
    angular.module('biblioteca')
        .controller('EditoraController', EditoraController);

    function EditoraController(EditoraService, toastr, $scope, $location, $routeParams){

        var vm = this;
        vm.titlePage =  'Editora(s)';
        vm.deleteEditora = deleteEditora;
        vm.editoras = EditoraService.query(
            {sort:'nome'}
        );

        function deleteEditora(editora) {
            editora
                .$remove()
                .then(
                    function success(data) {
                        if(data.success){
                            toastr.success(data.message);
                            $location.path('/editora');
                        }else{
                            toastr.error(data.message, 'Erro');
                            $location.path('/editora');
                        }
                    }
                );
        }
    }
})();