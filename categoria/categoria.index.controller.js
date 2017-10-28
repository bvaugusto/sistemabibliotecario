(function(){
    'use strict';
    angular.module('biblioteca')
        .controller('CategoriaController', CategoriaController);

    function CategoriaController(CategoriaService, toastr, $scope, $location, $routeParams) {

        var vm              = this;
        vm.titlePage        = 'Categoria(s)';
        vm.deleteCategoria  = deleteCategoria;
        vm.categorias       = CategoriaService.query(
            {sort: 'nome'}
        );

        function deleteCategoria(categoria) {
            categoria.$remove().then(
                    function success (data) {
                        if(data.success){
                            toastr.success(data.message);
                            $location.path('/categoria');
                        }else{
                            var msg = data.message;
                            toastr.error(msg, 'Erro');
                            $location.path('/categoria');
                        }
                    }
                );
        }
    }
})();