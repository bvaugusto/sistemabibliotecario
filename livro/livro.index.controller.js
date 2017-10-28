(function(){
    'use strict';
    angular.module('biblioteca')
        .controller('LivroController', LivroController);

    function LivroController(LivroService, toastr, $scope, $location){

        var vm = this;
        vm.titlePage =  'Livro(s)';
        vm.deleteLivro = deleteLivro;
        vm.livros = LivroService.query(
            {sort: 'title'}
        );

        function deleteLivro(livro) {
            livro
                .$remove()
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
        }
    }
})();