/**
 * Created by Luis Blanco on 8/6/2016.
 */
(function () {

    'use strict';

    var module = angular.module('app', ['common', 'ui.router', 'ui.bootstrap.buttons', 'googlechart']);

    module.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'ui/templates/dashboard.html'
            })
            .state('overall', {
                parent: 'dashboard',
                url: '/overall',
                templateUrl: 'ui/templates/overall.html'
            })
            .state('customers', { 
                parent:'dashboard', 
                url: '/customers', 
                templateUrl: 'ui/templates/customers.html' 
            })
                .state('injuries', { 
                    parent: 'dashboard', 
                    url: '/injuries', 
                    templateUrl: 'ui/templates/injuries.html' 
                })
                .state('costs', { 
                    parent:'dashboard', 
                    url: '/costs', 
                    templateUrl: 'ui/templates/costs.html' 
                })
            .state('admin', {
                url: '/admin',
                templateUrl: 'ui/templates/admin.html'
            });

        $urlRouterProvider.otherwise('/dashboard');
    });

    module.run(function(googleChartApiConfig) {
        googleChartApiConfig.optionalSettings.packages.push('calendar');
    });

}());