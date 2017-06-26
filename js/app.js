var app = angular.module("SNS", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./templates/ComponentLibrary.html",
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
