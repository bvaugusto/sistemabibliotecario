(function () {
    'use strict';
    angular.module('biblioteca')
        .controller('LivroEditarController', LivroEditarController);

    function LivroEditarController(LivroService, toastr, $scope, $location, $routeParams) {

        var vm = this;
        vm.titlePage = "Editar Livro";
        vm.livroService = LivroService.get({id: $routeParams.id});
        vm.editarLivro = editarLivro;

        function editarLivro(form) {
            if (form.$valid){
                vm.livroService
                    .$update()
                    .then(
                        function success(data) {
                            if(data.success){
                                toastr.success(data.message);
                                $location.path('/livro');
                            }else{
                                toastr.error(data.message, 'Erro');
                            }
                        }
                    );
            }
        }
    }
})();