(function (angular) {
    angular.module('qbApp')
    .controller("qbApp.userController", ['$http', '$stateParams', '$state', userController]);
    function userController($http, $stateParams, $state) {
        var vm = this;
        vm.user = {};
        //Methods
        vm.getStart = getStart;

        function getStart() {
            $state.go('root.board', {user: vm.user });
        }
    }

})
(angular);