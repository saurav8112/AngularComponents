/**
 * Created by Saurav on 25/06/2017.
 */


angular.module('SNS').component('navigation', {
    bindings: {},
    templateUrl: 'templates/components/navigation.html',

    controller: function ($location) {
        this.showMenu = false
        this.navigationType = 'custom'  // basic, custom
        this.navbarClass = 'navbar-left-align' // other values navbar-right-align, navbar-top-align, navbar-bottom-align
        this.activeNav = 'home'
        this.navigateTo = function (url) {
            this.activeNav = url
            this.showMenu = false
            $location.path(url);
        }

        this.closeMenu = function () {

        }
    }
})