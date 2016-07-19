(function (angular) {
    angular
        .module('qbApp')
        .controller("qbApp.resultController", ['$stateParams', '$state', '$filter', resultController]);

    function resultController($stateParams, $state, $filter) {
        var vm = this;

        //Properties
        vm.user = $stateParams.user;
        vm.responseList = $stateParams.responseList;
        vm.score = 0;

        init();

        function init() {
            if (vm.user == null)
                $state.go('root');
            else {
                for (var key in vm.responseList) {
                    var response = vm.responseList[key];
                    if (response.selectedOption)
                        vm.score += response.options[response.selectedOption].points;
                }
            }
        }
    }
})
(angular);