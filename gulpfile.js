"use strict";

var gulp = require('gulp');
var karma = require('karma').server;
var browserSync = require('browser-sync');

gulp.task('test', function(done){
	karma.start({
		configFile: __dirname + '/karma.conf.js',
		singleRun: true
	}, done);
});

gulp.task('serve', ['watch'], function(){
	browserSync({
		server: {
			baseDir: './app'
		}
	});
});

gulp.task('reload', function(){
	browserSync.reload();
});

gulp.task('watch', function(){
	gulp.watch('app/app.css', ['reload']);
	gulp.watch('app/**/*.html', ['reload']);
	gulp.watch('app/**/*.js', ['reload']);
});

gulp.task('default', ['serve']);