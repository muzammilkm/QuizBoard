angular(function () {

    angular.module("app.qbApp")
    .controller("app.boardController", ['$http','$stateParams', boardController]);
    function boardController($http, $stateParams) {
        var vm = this;
        vm.user = $stateParams.user;
        //Properties
        vm.quetions = [];

        //Methods


        inIt();

        function inIt() {
            $http.get('questionbank.json').then(function (data) {
                vm.quetions = data;
                console.log(vm.quetions);
            })
        }

    }
})
(angular);