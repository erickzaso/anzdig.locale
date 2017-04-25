'use strict'

var angular = require('angular');

/**
 * @ngdoc service
 * @name app.locale.localeProvider
 * @requires https://angular-translate.github.io/docs/#/api/pascalprecht.translate.$translateProvider
 * 
 * @description
 * This provider is used to initialize all the different languages suported in the application, also it is posible to get the list of all available languages in the application and the current language defined.
 * 
 * @property {array.string} languages:Array.String This array contains the list of the all available languages supported in the application. 
 * @property {string} defaultLanguage:String This String defines the defaul language used in the application. 
 */

var localeProvider = function ($translateProvider) {

	var languages = [
		'es-MX',
		'en-US'
	];

	var defaultLanguage = languages[0];

/**
 * @ngdoc method
 * @name getDefaultLanguage
 * @methodOf app.locale.localeProvider
 * 
 * @description
 * This method is used to retrive the language defined as default in the application.
 * 
 * @returns {string} String with the default language.
 */

/**
 * @ngdoc method
 * @name getDefaultLanguage
 * @methodOf app.locale.locale
 * 
 * @description
 * This method is used to retrive the language defined as default in the application.
 * 
 * @returns {string} String with the default language.
 */

	this.getDefaultLanguage = function(){
		return defaultLanguage;
	};

/**
 * @ngdoc method
 * @name getLanguages
 * @methodOf app.locale.localeProvider
 * 
 * @description
 * This method is used to retrive the list of all avaliable languages.
 * 
 * @returns {array.string} Array with all available languages.
 */

/**
 * @ngdoc method
 * @name getLanguages
 * @methodOf app.locale.locale
 * 
 * @description
 * This method is used to retrive the list of all avaliable languages.
 * 
 * @returns {array.string} Array with all available languages.
 */

	this.getLanguages = function() {
		return languages;
	};

/**
 * @ngdoc method
 * @name setLanguages
 * @methodOf app.locale.localeProvider
 * 
 * @description
 * This method is used to define the list of all avaliable languages.
 * 
 * @param {array.string} languages Array with the definition of all languages that will be available in the application.
 */

	this.setLanguages = function(newLanguages) {
		languages = newLanguages;
	};

/**
 * @ngdoc method
 * @name init 
 * @methodOf app.locale.localeProvider
 * 
 * @description
 * This method is used to initialize the languages needed in a model
 * 
 * @param {Object} translates Require.context Object with the reference of the files where the language legends are defined.
 */

	this.init = function(translates){				
		if(translates.keys().length > 0){
			for(var i = 0; i < languages.length; i++){
				if(translates(translates.keys()[0])[languages[i]] != undefined){
					$translateProvider.translations(languages[i], translates(translates.keys()[0])[languages[i]]);
				}
			}
		}
		$translateProvider.preferredLanguage(this.getDefaultLanguage());
		$translateProvider.useSanitizeValueStrategy('sanitize');
	};

/**
 * @ngdoc service
 * @name app.locale.locale
 * @requires https://angular-translate.github.io/docs/#/api/pascalprecht.translate.$translate
 * 
 * @description
 * This service is used to define the default languge that the appication have to use.
 */

	this.$get = ['$translate', function ($translate) {

 /**
 * @ngdoc method
 * @name  useLanguage
 * @methodOf app.locale.locale
 * 
 * @description
 * This method is used to define the language that que application have to use.
 * 
 * @param {String} language This is the String that defines the language that will be setted as default.
 */
		var setDefaultLanguage = function (language) {
			if(languages.includes(language)){
				$translate.use(language);
				defaultLanguage = language;
			}			
		}

		return {
			getDefaultLanguage: this.getDefaultLanguage,
			getLanguages     : this.getLanguages,
			setDefaultLanguage: setDefaultLanguage
		};
	}];
};

module.exports = angular.module('app.locale').provider('locale', ['$translateProvider', localeProvider]);