"use strict";

angular.module('movieDB.catalog', ['ui.bootstrap'])
	.controller('catalogCtrl', ['$scope','$http', function($scope, $http){

		$scope.currentPage = 1;
		$scope.pageSize = 12;

		$http.get('json/movies.json').success(function(data){
			$scope.movieList = data;
		});		
		
	}]);