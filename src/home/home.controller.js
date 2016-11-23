(function(){
	'use strict'
	var app = angular.module('weatherApp');
	app.controller('HomeController', HomeController);

	HomeController.$inject = ['locationService', 'spinnerService'];
	

	function HomeController (locationService, spinnerService){
	  var HomeCtrl = this;
	  
	   HomeCtrl.location = locationService;

	   HomeCtrl.loading = function(){
	   		HomeCtrl.showSpinner = spinnerService;
		}
	};
	
})();