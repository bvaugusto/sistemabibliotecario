(function(){
    'use strict';
    angular.module('biblioteca')
        .controller('EditoraCadastrarController', EditoraCadastrarController);

    function EditoraCadastrarController(EditoraService, toastr, $location){

        var vm = this;
        vm.titlePage =  'Cadastrar Editora';
        vm.editoraService = new EditoraService;
        vm.salvarEditora = salvarEditora;

        function salvarEditora(form) {

            if(form.$valid){
                vm.editoraService
                    .$save()
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
            }else{
                toastr.error('Falha o enviar as informações pelo formulário!', 'Erro');
                $location.path('/editora');
            }
        }
    }
})();