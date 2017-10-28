(function(){
    'use strict';
    angular.module('biblioteca')
        .controller('CategoriaCadastrarController', CategoriaCadastrarController);

    function CategoriaCadastrarController(CategoriaService, toastr, $location){

        var vm              = this;
        vm.titlePage        = 'Cadastrar Categoria';
        vm.categoriaService = new CategoriaService;
        vm.salvarCategoria  = salvarCategoria;

        function salvarCategoria(form) {
            if (form.$valid) {
                vm.categoriaService
                    .$save()
                    .then(
                        function success(data) {
                            if(data.success){
                                toastr.success(data.message);
                                $location.path('/categoria');
                            }else{
                                toastr.error(data.message, 'Error');
                                $location.path('/categoria');
                            }
                        }
                    );
            }else{
                toastr.error('Falha o enviar as informações pelo formulário!', 'Erro');
                $location.path('/categoria');
            }
        }
    }
})();