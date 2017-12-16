(function () {
    'use strict';
    angular.module('biblioteca')
        .controller('LeitorEditarController', LeitorEditarController);

    function LeitorEditarController(LeitorService, toastr, $scope, $location, $routeParams) {

        var vm = this;
        vm.titlePage = "Editar Leitor";
        vm.leitorService = LeitorService.get({id: $routeParams.id});
        vm.editarLeitor = editarLeitor;

        function editarLeitor(form) {

            if (form.$valid){

                vm.leitorService
                    .$update()
                    .then(

                        function success (data) {

                            if (data.success){
                                toastr.success(data.message);
                                $location.path('/leitor');
                            }else{
                                var msg = data.message;
                                toastr.error(data.message, 'Erro');
                            }
                        }
                    );

            }
        }
    }
})();