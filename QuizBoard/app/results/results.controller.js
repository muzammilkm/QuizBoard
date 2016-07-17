(function (angular) {
    angular
        .module('qbApp')
        .controller("qbApp.resultController", ['$stateParams', '$state', '$filter', resultController]);

    function resultController($stateParams, $state, $filter) {
        var vm = this;

        //Properties
        vm.user = $stateParams.user;
        vm.responseList = $stateParams.responseList;
    }
})
(angular);