(function (angular) {
    angular
        .module("qbApp", ['ui.bootstrap', 'ngAnimate', 'ui.router'])
        .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {
            $urlRouterProvider.when("", ["$state", function ($state) {
                $state.go("root")
            }]);
            $stateProvider
                .state('root', {
                    url: '/',
                    title: "Dashboard",
                    views: {
                        '@': {
                            templateUrl: 'app/user/user.html',
                            controller: 'qbApp.userController',
                            controllerAs: 'vm'
                        }
                    }
                })
                .state('root.board', {
                    url: 'board',
                    title: "Board",
                    views: {
                        '@': {
                            templateUrl: 'app/board/board.html',
                            controller: 'qbApp.boardController',
                            controllerAs: 'vm'
                        }
                    },
                    params: {
                        user: null
                    }
                })
                .state('root.result', {
                    url: 'result',
                    title: "Result",
                    views: {
                        '@': {
                            templateUrl: 'app/results/results.html',
                            controller: 'qbApp.resultController',
                            controllerAs: 'vm'
                        }
                    },
                    params: {
                        user: null,
                        responseList: null
                    }
                });
        }])
        .run(['$rootScope', '$state', function ($rootScope, $state) {
            $rootScope.$on("$stateChangeSuccess", function (event, toState) {
                $rootScope.title = toState.title;
            });
            $.material.init()
        }]);

}(angular));
