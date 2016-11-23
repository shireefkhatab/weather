(function(){
	'use strict'
	var app = angular.module('weatherApp');
	app.controller('DailyController', DailyController);

	DailyController.$inject = ['locationService', 'dailyInfo', 'spinnerService'];
	function DailyController(locationService, dailyInfo, spinnerService){
		
		var DCtrl = this;

		DCtrl.location = locationService;

		

		DCtrl.todayText = dailyInfo.forecast.txt_forecast.forecastday.splice(0, 1);
		DCtrl.todayInfo = dailyInfo.forecast.simpleforecast.forecastday.splice(0, 1);

		DCtrl.followingDaysText = [];
		dailyInfo.forecast.txt_forecast.forecastday.forEach(function(item, index){
				if(item.title.indexOf('Night') === -1){
					DCtrl.followingDaysText.push(item)
				}
			});

		DCtrl.followingDaysInfo = dailyInfo.forecast.simpleforecast.forecastday;
			
		DCtrl.sunrise = dailyInfo.sun_phase.sunrise;
		DCtrl.sunset = dailyInfo.sun_phase.sunset;

		DCtrl.moonrise = dailyInfo.moon_phase.moonrise; 
		DCtrl.moonset = dailyInfo.moon_phase.moonset;

		DCtrl.highiest = dailyInfo.almanac.temp_high;
		DCtrl.lowest = dailyInfo.almanac.temp_low;

		DCtrl.units = ["Metric", "Hybrid", "Imperial"];
		DCtrl.selectedUnit = 'Metric';


		 DCtrl.loading = function(){
	   		DCtrl.showSpinner = spinnerService;
		};
		
	};

})();