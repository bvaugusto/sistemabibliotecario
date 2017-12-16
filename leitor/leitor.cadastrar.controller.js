(function () {
    'use strict';
    angular.module('biblioteca')
        .controller('LeitorCadastrarController', LeitorCadastrarController);

    function LeitorCadastrarController(LeitorService, toastr, $scope, $location) {

        var vm = this;
        vm.titlePage = 'Cadastrar Leitor';
        vm.leitorService = new LeitorService;
        vm.salvarLeitor = salvarLeitor;

        function salvarLeitor(form) {
            if(form.$valid){
                vm.leitorService
                    .$save()
                    .then(
                        function success(data) {
                            if(data.success){
                                toastr.success(data.message);
                                $location.path('/leitor');
                            }else{
                                toastr.error(data.message);
                                $location.path('/leitor');
                            }
                        }
                    );
            }else{
                toastr.error('Falha o enviar as informações pelo formulário!', 'Erro');
                $location.path('/leitor');
            }
        }
    }
})();