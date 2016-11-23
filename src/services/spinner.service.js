
(function(){
	'use strict'

	var app = angular.module('weatherApp');
	app.service('spinnerService', spinnerService);

	spinnerService.$inject = ['dailyService', 'hourlyService'];
	function spinnerService (dailyService, hourlyService){
		this.showSpinner = function(){
	   		this.loading = (dailyService().length > 0 || hourlyService().length > 0 )? false : true;
	   		return this.loading;	
	   };
	  
	};

})();