(function(){
    'use strict';
    angular.module('biblioteca')
        .config(
            ['$routeProvider',
                function($routeProvider,$locationProvider) {
                    //noinspection JSUnresolvedFunction
                    $routeProvider

                    // .when('biblioteca', {
                    //     //abstract: true,
                    //     url: '/',
                    //     template: '<ui-view />'
                    // })
                    // .when('biblioteca.home', {
                    //     url: '',
                    //     templateUrl: './app/home/home.index.html',
                    //     controller: 'InicioController',
                    //     controllerAs: 'inicio'
                    // })

                    .when('/',{
                        templateUrl: './home/home.index.html',
                        controller: 'HomeController',
                        controllerAs: 'homeIndex'

                    })
                    .when('/autor',{
                        templateUrl: './autor/autor.index.html',
                        controller: 'AutorController',
                        controllerAs: 'autorIndex'

                    })

                    .when('/autor/cadastrar',{
                        templateUrl: './autor/autor.cadastrar.html',
                        controller: 'AutorCadastrarController',
                        controllerAs: 'autorCadastrar'

                    })

                    .when('/autor/:id/edit',{
                        templateUrl: './autor/autor.editar.html',
                        controller: 'AutorEditarController',
                        controllerAs: 'autorEditar'

                    })

                    .when('/categoria',{
                        templateUrl: './categoria/categoria.index.html',
                        controller: 'CategoriaController',
                        controllerAs: 'categoriaIndex'

                    })

                    .when('/categoria/cadastrar',{
                        templateUrl: './categoria/categoria.cadastrar.html',
                        controller: 'CategoriaCadastrarController',
                        controllerAs: 'categoriaCadastrar'

                    })

                    .when('/categoria/:id/edit',{
                        templateUrl: './categoria/categoria.editar.html',
                        controller: 'CategoriaEditarController',
                        controllerAs: 'categoriaEditar'

                    })

                    .when('/editora',{
                        templateUrl: './editora/editora.index.html',
                        controller: 'EditoraController',
                        controllerAs: 'editoraIndex'

                    })

                    .when('/editora/cadastrar',{
                        templateUrl: './editora/editora.cadastrar.html',
                        controller: 'EditoraCadastrarController',
                        controllerAs: 'editoraCadastrar'

                    })

                    .when('/editora/:id/edit',{
                        templateUrl: './editora/editora.editar.html',
                        controller: 'EditoraEditarController',
                        controllerAs: 'editoraEditar'

                    })

                    .when('/emprestimo',{
                        templateUrl: './emprestimo/emprestimo.index.html',
                        controller: 'EmprestimoController',
                        controllerAs: 'emprestimoIndex'

                    })

                    .when('/emprestimo/cadastrar',{
                        templateUrl: './emprestimo/emprestimo.cadastrar.html',
                        controller: 'EmprestimoCadastrarController',
                        controllerAs: 'emprestimoCadastrar'

                    })

                    .when('/emprestimo/:id/edit',{
                        templateUrl: './emprestimo/emprestimo.editar.html',
                        controller: 'EmprestimoEditarController',
                        controllerAs: 'emprestimoEditar'

                    })

                    .when('/exemplar',{
                        templateUrl: './exemplar/exemplar.index.html',
                        controller: 'ExemplarController',
                        controllerAs: 'exemplarIndex'

                    })

                    .when('/exemplar/cadastrar',{
                        templateUrl: './exemplar/exemplar.cadastrar.html',
                        controller: 'ExemplarCadastrarController',
                        controllerAs: 'exemplarCadastrar'

                    })

                    .when('/exemplar/:id/edit',{
                        templateUrl: './exemplar/exemplar.editar.html',
                        controller: 'ExemplarEditarController',
                        controllerAs: 'exemplarEditar'

                    })

                    .when('/leitor',{
                        templateUrl: './leitor/leitor.index.html',
                        controller: 'LeitorController',
                        controllerAs: 'leitorIndex'

                    })

                    .when('/leitor/cadastrar',{
                        templateUrl: './leitor/leitor.cadastrar.html',
                        controller: 'LeitorCadastrarController',
                        controllerAs: 'leitorCadastrar'

                    })

                    .when('/leitor/:id/edit',{
                        templateUrl: './leitor/leitor.editar.html',
                        controller: 'LeitorEditarController',
                        controllerAs: 'leitorEditar'

                    })

                    .when('/livro',{
                        templateUrl: './livro/livro.index.html',
                        controller: 'LivroController',
                        controllerAs: 'livroIndex'

                    })

                    .when('/livro/cadastrar',{
                        templateUrl: './livro/livro.cadastrar.html',
                        controller: 'LivroCadastrarController',
                        controllerAs: 'livroCadastrar'

                    })

                    .when('/livro/:id/edit',{
                        templateUrl: './livro/livro.editar.html',
                        controller: 'LivroEditarController',
                        controllerAs: 'livroEditar'

                    })

                    .otherwise({redirectTo : '/'});

                    //This one is not exactly a good practice but its the
                    //only way to load routes asynchronously
                    // window.routeProvider = $routeProvider;
                    // window.startHash = window.location.hash.substring(1);
                    // $locationProvider.html5Mode({
                    //     enabled: true,
                    //     requireBase: false
                    // });

                    // use the HTML5 History API
                    //$locationProvider.html5Mode(true);

                }
            ]
        )
})();