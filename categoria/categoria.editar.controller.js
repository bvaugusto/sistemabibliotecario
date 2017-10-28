(function(){
    'use strict';
    angular.module('biblioteca')
        .controller('CategoriaEditarController', CategoriaEditarController);

    function CategoriaEditarController(CategoriaService, toastr, $scope, $location, $routeParams) {

        var vm              = this;
        vm.titlePage        = 'Editar Categoria';
        vm.categoriaService = CategoriaService.get({id: $routeParams.id});
        vm.editarCategoria = editarCategoria;


        function editarCategoria(form) {

            if(form.$valid){

                vm.categoriaService
                    .$update()
                    .then(
                        function success(data) {
                            if(data.success){
                                toastr.success(data.message);
                                $location.path('/categoria');
                            }else{
                                toastr.error(data.message, 'Error');
                                $location.path('/catgoria');
                            }
                        }
                    );
            }
        }
    }
})();