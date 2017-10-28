(function () {
    'use strict';
    angular.module('biblioteca')
        .controller('AutorEditarController', AutorEditarController);

    function AutorEditarController(AutorService, toastr, $scope, $location, $routeParams) {

        var vm = this;
        vm.titlePage = "Editar Autor";
        vm.autorService = AutorService.get({id: $routeParams.id});
        vm.editarAutor = editarAutor;

        // $scope.get = function () {
        //     $scope.autorEditarService = AutorService.get({id:$routeParams.id});
        // }

        function editarAutor(form) {

            if(form.$valid){

                vm.autorService
                    .$update()
                    .then(
                    // function success (data) {
                    //     toastr.success(data.message);
                    //     $location.path('/autor');
                    // },
                    // function error (response, data) {
                    //     var msg = data.message;
                    //     if (response && response.data && (response.data.error || response.data.message)) {
                    //         msg = response.data.error || response.data.message;
                    //     }
                    //     toastr.error(msg, 'Erro');
                    // }

                    function success (data) {
                        if(data.success){
                            toastr.success(data.message);
                            $location.path('/autor');
                        }else{
                            var msg = data.message;
                            toastr.error(msg, 'Erro');
                        }
                    }
                );

                // var param = $jQuery.param(JSON.parse(angular.toJson(form)));
                // console.log(param);

                // vm.autorService.$update().then({id: $routeParams.id},
                //     param,
                //     function success(data) {
                //         if(data.success){
                //             toastr.success(data.message);
                //             $location.path('/autor');
                //         }else{
                //             var msg = data.message;
                //             console.log("step 2");
                //             // if (response && response.data && (response.data.error || response.data.message)) {
                //             //     msg = response.data.error || response.data.message;
                //             // }
                //             toastr.error(msg, 'Erro');
                //             $location.path('/autor');
                //         }
                //     }
                // );
            }
        }
    }
})();