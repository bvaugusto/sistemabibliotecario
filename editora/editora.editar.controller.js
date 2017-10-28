(function(){
    'use strict';
    angular.module('biblioteca')
        .controller('EditoraEditarController', EditoraEditarController);

    function EditoraEditarController(EditoraService, toastr, $scope, $location, $routeParams) {

        var vm              = this;
        vm.titlePage        = 'Editar Categoria';
        vm.editoraService = EditoraService.get({id: $routeParams.id});
        vm.editarEditora = editarEditora;


        function editarEditora(form) {

            if(form.$valid){

                vm.editoraService
                    .$update()
                    .then(
                        function success(data) {
                            if(data.success){
                                toastr.success(data.message);
                                $location.path('/editora');
                            }else{
                                toastr.error(data.message, 'Error');
                                $location.path('/editora');
                            }
                        }
                    );
            }
        }
    }
})();