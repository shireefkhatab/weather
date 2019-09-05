
(function(){
	'use strict'

	var app = angular.module('weatherApp');
	app.service('dailyService', dailyService);

	dailyService.$inject = ['$http'];
	function dailyService ($http){
	    this.getDailyForecast = function(country, city){
		   	return $http({
			   	method: 'GET',
			   	url: 'https://api.darksky.net/forecast/1141ccf047d614284a0674902bc3c89f/' + country +'/' + city + '.json',
			   	dataType : "jsonp",
		  	})
	    };
	  
	};

})();
