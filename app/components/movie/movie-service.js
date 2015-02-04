"use strict";

angular.module('movieDB.movie-service', [])
	.factory('movieAPIservice', ['$http', function($http){
		var movieAPI= {};

		movieAPI.getMovies = function(){
			return $http.get("json/movies.json");
		}

		movieAPI.getGenres = function(){
			return $http.get("json/genres.json");
		}

		return movieAPI;
	}]);