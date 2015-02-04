'use strict';

angular.module('movieDB', [
	'ngRoute',
	'movieDB.catalog',
	'movieDB.movie',
	'movieDB.paginate-filter'
	]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when("/", {
			templateUrl: "catalog/catalog.html",
			controller: "catalogCtrl"
		}).
		when("/movie/:id", {
			templateUrl: "movie/movie.html",
			controller: "movieCtrl"
		}).
		otherwise({
			redirectTo: "/"
		});
}]);