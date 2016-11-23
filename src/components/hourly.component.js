(function(){

	'use strict'

	var app = angular.module('weatherApp');
	app.component('hourlyComponent', {
		templateUrl: 'src/components//hourly.component.html',
		bindings: {
			hourlyInfo: '<',
			locationInfo: '<',
			selectedUnit: '<'
		}
	})

})();