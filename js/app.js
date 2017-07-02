var app = angular.module("SNS", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./templates/pages/tableExample.html",
            controller: 'homeCtrl',
        })
        .when("/home", {
            templateUrl: "./templates/pages/home.html",
        })
        .when("/service", {
            templateUrl: "./templates/pages/service.html",
        }).when("/contact", {
            templateUrl: "./templates/pages/contact.html",
        })
});
