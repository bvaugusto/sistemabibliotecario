(function(){
    'use strict';
    angular.module('biblioteca')
        .controller('LeitorController', LeitorController);

    function LeitorController(LeitorService, toastr, $scope, $location, $routeParams){

        var vm = this;
        vm.titlePage =  'Leitor(es)';
        vm.deleteLeitor = deleteLeitor;
        vm.leitores = LeitorService.query({sort:'nome'});

        function deleteLeitor(leitor) {
            leitor
                .$remove()
                .then(
                    function success (data) {
                        if(data.success){
                            toastr.success(data.message);
                            $location.path('/leitor');
                        }else {
                            var msg = data.message;
                            toastr.error(msg, 'Erro');
                            $location.path('/leitor');
                        }
                    }
                )
        }
    }
})();