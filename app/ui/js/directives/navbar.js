(function (module) {

    var navbar = function () {
        return {
            templateUrl: '/ui/templates/nav.html'
        };
    };

    module.directive('navbar', navbar);

}(angular.module('app')));