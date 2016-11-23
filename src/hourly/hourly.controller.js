(function(){
	'use strict'
	var app = angular.module('weatherApp');
	app.controller('HourlyController', HourlyController);

	HourlyController.$inject = ['locationService', 'hourlyInfo', 'spinnerService'];
	function HourlyController(locationService, hourlyInfo, spinnerService){
		
		var HCtrl = this;


		HCtrl.location = locationService;

		HCtrl.hourlyInfo = hourlyInfo.hourly_forecast;

		HCtrl.locationInfo = hourlyInfo.location;

		HCtrl.units = ["Metric", "Hybrid", "Imperial"];
		HCtrl.selectedUnit = 'Metric';


		 HCtrl.loading = function(){
	   		HCtrl.showSpinner = spinnerService;
		}

	};
})();