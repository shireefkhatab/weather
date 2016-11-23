
(function(){
	'use strict'

	var app = angular.module('weatherApp');
	app.service('dailyService', dailyService);

	dailyService.$inject = ['$http'];
	function dailyService ($http){
	    this.getDailyForecast = function(country, city){
		   	return $http({
			   	method: 'GET',
			   	url: 'https://api.wunderground.com/api/67162b7ee685fb63/geolookup/astronomy/almanac/forecast/q/' + country +'/' + city + '.json',
			   	dataType : "jsonp",
		  	})
	    };
	  
	};

})();