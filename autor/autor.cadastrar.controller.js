(function () {
    'use strict';
    angular.module('biblioteca')
        .controller('AutorCadastrarController', AutorCadastrarController);

    function AutorCadastrarController (AutorService, toastr, $location) {
        var vm = this;

        vm.titlePage = 'Cadastrar Autor';
        vm.autorService = new AutorService();
        vm.salvarAutor = salvarAutor;

        // $scope.clear = function () {
        //     $scope.autorCadastrar.autor = "";
        // }

        function salvarAutor (form) {

            if (form.$valid) {

                // $scope.$watch("formCadastrarAutor", function(formVal){
                //
                //     // var name = formVal.nome.trim;
                //     //
                //     // console.log(name);
                //
                //     // if (formVal.nome.trim().length < 3) {
                //     //     toastr.warning('Autor deve ter pelo menos 3 caracteres');
                //     //     return false;
                //     // }else{
                //     //     toastr.warning('asdf');
                //     //     return false;
                //     // }
                // });

                // if (form.nome.trim().length < 3) {
                //     toastr.warning('Autor deve ter pelo menos 3 caracteres');
                //     return false;
                // }

                vm.autorService.$save().then(

                    // if(data.success){
                    //     console.log('data 1 => ',data);
                    //     toastr.success(data.message);
                    //     $location.path('/autor');
                    // }else{
                    //     console.log('data 2 => ',data);
                    //     toastr.success(data.message);
                    //     $location.path('/autor');
                    // }

                    function success (data) {
                        if(data.success){
                            toastr.success(data.message);
                            $location.path('/autor');
                        }else{
                            var msg = data.message;
                            //console.log("step 2");
                            // if (response && response.data && (response.data.error || response.data.message)) {
                            //     msg = response.data.error || response.data.message;
                            // }
                            toastr.error(msg, 'Erro');
                            $location.path('/autor');
                        }
                    }
                // function error (response, data) {
                //     var msg = data.message;
                //     console.log("step 2");
                //     if (response && response.data && (response.data.error || response.data.message)) {
                //         msg = response.data.error || response.data.message;
                //     }
                //     toastr.error(msg, 'Erro');
                // }

                    // function success (data) {
                    //     console.log('data 1 => ',data);
                    //     toastr.success(data.message);
                    //     $location.path('/autor');
                    // },
                    // function error (data) {
                    //     console.log('data 2 => ',data);
                    //     // var msg = data.message;
                    //     //var msg = "Falha ao gravar autor!";
                    //     // if (data && data.data && (response.data.error || response.data.message)) {
                    //     //     msg = response.data.error || response.data.message;
                    //     // }
                    //     toastr.error(msg, 'Erro');
                    // }
                );
            }
        }
    }
})();