(function (angular) {
    angular
        .module('qbApp')
        .controller("qbApp.resultController", ['$stateParams', '$state', '$filter', resultController]);

    function resultController($stateParams, $state, $filter) {
        var vm = this;

        //Properties
        vm.responseIndex = 0;
        vm.user = $stateParams.user;
        var indexres = 1;
        var responseindex =0;
        vm.responseList = $stateParams.responseList;
        if (vm.responseList.length != null) {
            if (vm.responseList.length > vm.responseindex) {
                vm.response = vm.responseList[vm.responseindex++];
                console.log(vm.response.options[response.selectedOption - 1].text);
            }
        }
        else
        {
            $state
                .go('root.user');
        }
    }
})
(angular);