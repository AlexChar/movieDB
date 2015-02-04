"use strict";

angular.module('movieDB.genre', ['ui.bootstrap'])
	.controller('genreCtrl', ['$scope','movieAPIservice', '$routeParams', '$filter', function($scope, movieAPIservice, $routeParams, $filter){

		$scope.currentPage = 1;
		$scope.pageSize = 12;
		$scope.genreName = $routeParams.genreName;
		$scope.pageTitle = $scope.genreName + " movies";

		movieAPIservice.getMovies().success(function(data){
			$scope.movieList = $filter('filter')(data, function(movie){
				return $filter('filter')(movie.genres, {name: $scope.genreName}).length;
			});
		});		
		
		movieAPIservice.getGenres().success(function(data){
			$scope.genreList = data;
		});		
		
	}]);