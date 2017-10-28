(function () {
    'use strict';
    angular.module('biblioteca')
        .controller('AutorController', AutorController);

    function AutorController(AutorService, toastr, $scope, $location, $routeParams) {
        var vm = this;

        vm.titlePage = 'Autor(es)';
        // console.log('vm'+vm);
        // vm.autores = new AutorService();
        vm.deleteAutor = deleteAutor;

        vm.autores = AutorService.query(
            {sort:'nome'}
        );

        function deleteAutor(autor) {
            autor
            .$remove()
            .then(
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

                // function success () {
                //     toastr.success('O autor ' + autor.nome + ' foi removido');
                //     var index = _.findIndex(vm.autores, _.matches({_id: autor._id}));
                //     vm.autores.splice(index, 1);
                // },
                // function error (response) {
                //     var msg = 'Erro ao remover autor';
                //     if (response && response.data && (response.data.error || response.data.message)) {
                //         msg = response.data.error || response.data.message;
                //     }
                //     toastr.error(msg, 'Error');
                // }
            );
        }
    }
})();

// (function(){
//     'use strict';
//     angular.module('biblioteca')
//     // .controller('AutorController', AutorController);
//         .controller('AutorController', function($scope, $q) {
//             var vm = this;
//
//             vm.titlePage = 'Autor';
//             console.log('vm'+vm);
//             //vm.fornecedor = new FornecedorService();
//
//             //vm.autores = AutorService.query();
//         })
//
//     // function AutorController(HomeService){
//     //     var home = this;
//     //     home.title = 'Some Title';
//     //
//     //     console.log('home => '+home);
//     // }
// })();