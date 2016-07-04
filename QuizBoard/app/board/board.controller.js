(function (angular) {

    angular.module('qbApp')
    .controller("qbApp.boardController", ['$http', '$stateParams', '$state', boardController]);
    function boardController($http, $stateParams, $state) {
        var vm = this;
        vm.user = $stateParams.user;
        //Properties
        vm.quetions = [];
        vm.text = "Next";

        //Methods
        vm.getResult = getResult;


        inIt();

        function inIt() {
            $http.get('questionbank.json').then(function (data) {
                vm.quetions = data;
                console.log(vm.quetions);
            })
        }
        function getResult() {
            $state.go('root.result');
        }


    }
})
(angular);