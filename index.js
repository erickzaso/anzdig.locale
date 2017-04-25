'use strict'

var angular = require('angular');

/**
 * @ngdoc overview
 * @name app.locale
 * 
 * @requires https://angular-translate.github.io/docs/#/api/pascalprecht.translate.directive:translate
 * @requires https://docs.angularjs.org/api/ngSanitize
 * 
 * @description
 * This module is used to define and control the different languages involved in the application.
 */

module.exports = angular.module('app.locale', [	
	require('angular-translate'),
    require('angular-sanitize')
]).name;

var loadRequiredFiles = function (loadFiles){
    for(var i = 0; i < loadFiles.keys().length; i++){
        loadFiles(loadFiles.keys()[i]);        
    }
}

loadRequiredFiles(require.context('./js', true, /.js$/));