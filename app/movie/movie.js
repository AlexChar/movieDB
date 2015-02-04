"use strict";

angular.module('movieDB.movie', ['ui.bootstrap'])
	.controller('movieCtrl', ['$scope','$filter', 'movieAPIservice', '$routeParams', function($scope, $filter, movieAPIservice, $routeParams){
		$scope.movieId = $routeParams.id;

		movieAPIservice.getMovies().success(function(data){
			$scope.movie = $filter('filter')(data, {id: parseInt($scope.movieId, 10)}, true)[0];
		});	
	}]);