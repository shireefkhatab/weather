
(function(){
	'use strict'

	var app = angular.module('weatherApp');
	app.config(config);


	 config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function config ($stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/');

	    $stateProvider
	    .state('home', {
	    	url: '/',
			templateUrl:'src/home/home.html',
			controller:'HomeController',
			controllerAs: 'HomeCtrl'
		})
		.state('daily',{
			url: '/daily',
			templateUrl:'src/daily/daily.html',
			controller :'DailyController',
			controllerAs: 'DCtrl',
			resolve:{
				dailyInfo: ['dailyService', 'locationService',  function(dailyService, locationService){
					return dailyService.getDailyForecast(locationService.country.name, locationService.city.name)
					.then(function(response){
						return response.data;
					}).catch(function(error){
						return error;
					})
				}]
			}
		})
		.state('hourly',{
			url: '/hourly',
			templateUrl:'src/hourly/hourly.html',
			controller :'HourlyController',
			controllerAs: 'HCtrl',
			resolve:{
				hourlyInfo: ['hourlyService', 'locationService',  function(hourlyService,locationService){
					return hourlyService.getHourlyForecast(locationService.country.name, locationService.city.name)
					.then(function(response){
						return response.data;
					}).catch(function(error){
						return error;
					})
				}]
			}
		});



	};

})();
	