(function(){
	
	'use strict'

	var app = angular.module('weatherApp');
	app.component('dailyComponent', {
		templateUrl: 'src/components/daily.component.html',
		bindings: {
			todayText: '<',
			todayInfo: '<',
			followingDaysText: '<',
			followingDaysInfo: '<',
			sunrise: '<',
			sunset: '<',
			moonrise: '<',
			moonset: '<',
			highiest: '<',
			lowest: '<',
			selectedUnit: '<'
		}
	});

})();