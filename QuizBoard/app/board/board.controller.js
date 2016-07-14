(function (angular) {

    angular.module('qbApp')
    .controller("qbApp.boardController", ['$http', '$stateParams', '$state', '$filter', boardController]);
    function boardController($http, $stateParams, $state, $filter) {
        var vm = this;
        vm.user = $stateParams.user;
        //Properties
        vm.questions = [];
        vm.text = "Next";
        vm.user = $stateParams.user;
        console.log(vm.user.name);
        //Methods
        vm.getResult = getResult;
        function boardController(user) {
            var vm = this;
            vm.user = user;
        }

        inIt();

        function inIt() {
            $http.get('questionbank.json').then(function (data) {
                vm.questions = data;
            })
        }
        function getResult() {
            $state.go('root.result', { user: vm.user, responseList: vm.quetions });
        }


    }
})
(angular);