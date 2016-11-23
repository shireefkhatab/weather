
(function(){
	'use strict'

	var app = angular.module('weatherApp');
	app.service('hourlyService', hourlyService);

	hourlyService.$inject = ['$http'];
	function hourlyService ($http){
	    this.getHourlyForecast = function(country, city){
		   	return $http({
			   	method: 'GET',
			   	url: 'https://api.wunderground.com/api/67162b7ee685fb63/geolookup/hourly/q/' + country + '/' + city + '.json',
			   	dataType : "jsonp",
		  	})
	    };
	  
	};

})();