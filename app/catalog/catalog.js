"use strict";

angular.module('movieDB.catalog', [])
	.controller('catalogCtrl', ['$scope','$http', function($scope, $http){
		$http.get('json/movies.json').success(function(data){
			$scope.movieList = data;
		});
	}]);