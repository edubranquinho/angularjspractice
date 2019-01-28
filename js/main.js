angular.module('app', ['ngRoute'])
.config(function($routeProvider){
    $routeProvider.
        when('/', {
            controller: 'SimpleController',
            templateUrl: 'html/partials/main.html'
        });
});