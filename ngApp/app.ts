namespace overflow {

    angular.module('overflow', ['ui.router', 'ngResource', 'ui.bootstrap', 'yaru22.angular-timeago']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: overflow.Controllers.QuestionController,
                controllerAs: 'vm'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: overflow.Controllers.AboutController,
                controllerAs: 'vm'
            })
            .state('questions', {
                url: '/questions',
                templateUrl: '/ngApp/views/questions.html',
                controller: overflow.Controllers.QuestionController,
                controllerAs: 'vm'
            })
            .state('questionDetails', {
                url: '/question/:id',
                templateUrl: '/ngApp/views/questions.html',
                controller: overflow.Controllers.QuestionDetailsController,
                controllerAs: 'vm'
            })
            .state('askQuestion', {
                url: '/askQuestion',
                templateUrl: '/ngApp/views/askQuestion.html',
                controller: overflow.Controllers.AskQuestionController,
                controllerAs: 'vm'
            })
            .state('editQuestion', {
                url: '/editQuestion/:id',
                templateUrl: '/ngApp/views/editQuestion.html',
                controller: overflow.Controllers.EditQuestionController,
                controllerAs: 'vm'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
