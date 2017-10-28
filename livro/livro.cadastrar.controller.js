(function(){
    'use strict';
    angular.module('biblioteca')
        .controller('LivroCadastrarController', LivroCadastrarController);

    function LivroCadastrarController(LivroService, toastr, $scope, $location){

        var vm = this;
        vm.titlePage =  'Cadastrar Livro';
        vm.livroService = new LivroService;
        vm.salvarLivro = salvarLivro;

        function salvarLivro(form) {
            console.log(form);
            if(form.$valid){
                vm.livroService
                    .$save()
                    .then(
                        function success(data) {
                            if(data.success){
                                toastr.success(data.message);
                                $location.path('/livro');
                            }else{
                                toastr.error(data.message);
                                $location.path('/livro');
                            }
                        }
                    );
            }else{
                toastr.error('Falha o enviar as informações pelo formulário!', 'Erro');
                $location.path('/livro');
            }
        }
    }
})();