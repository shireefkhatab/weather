
(function(){
	'use strict'

	var app = angular.module('weatherApp');
	app.service('locationService', locationService);

	function locationService (){
	   var location = {
	   	country: {name: 'UK'},
	   	city: {name: 'London'}
	   };
	   return location;
	}

})();