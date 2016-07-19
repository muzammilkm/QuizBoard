(function (angular) {

    angular
        .module('qbApp')
        .controller("qbApp.boardController", ['$http', '$stateParams', '$state', '$filter', '$interval', '$timeout', boardController]);

    function boardController($http, $stateParams, $state, $filter, $interval, $timeout) {
        var vm = this;

        //Properties
        var stopTime;
        vm.user = $stateParams.user;
        vm.questions = [];
        vm.user = $stateParams.user;
        vm.questionIndex = 0;
        vm.questionProgress = 0;
        vm.duration = 0;
        vm.freezeQuestion = false;
        vm.moveNext = false;

        //Methods
        vm.nextQuestion = nextQuestion;

        init();

        function boardController(user) {
            var vm = this;
            vm.user = user;
        }

        function init() {
            if (!vm.user)
                $state.go("root");
            else {
                $http
                    .get('questionbank.json')
                    .then(function (response) {
                        vm.questions = $filter('filter')(response.data, { category: vm.user.category });
                        nextQuestion();
                    });
            }
        }

        function nextQuestion() {
            $interval.cancel(stopTime);
            if (vm.questions.length > vm.questionIndex) {
                vm.currentQuestion = vm.questions[vm.questionIndex++];
                startTimer();
            }
            else {
                $state
                    .go('root.result', { user: vm.user, responseList: vm.questions });
            }
        }

        function startTimer() {
            vm.duration = 0;
            vm.questionProgress = 0;
            vm.freezeQuestion = false;
            vm.moveNext = vm.questionIndex==1;
            stopTime = $interval(function () {
                vm.moveNext = true;
                vm.duration++;
                vm.questionProgress = (vm.duration / vm.currentQuestion.duration) * 10;
                if (vm.questionProgress == 100) {
                    $interval.cancel(stopTime);
                    vm.freezeQuestion = true;
                }
            }, 100, vm.currentQuestion.duration * 10);
        }
    }
})
(angular);