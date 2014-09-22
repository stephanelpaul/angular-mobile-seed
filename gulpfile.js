'use strict';

var gulp = require('gulp'),
		browserSync = require('browser-sync'),
		gulpLoadPlugins = require('gulp-load-plugins'),
		plugins = gulpLoadPlugins();

var paths = {
	sass: ['./src/sass/*.scss']
};

gulp.task('bs-reload', function() {
	browserSync.reload();
});

gulp.task('sass', function() {
	gulp.src(paths.sass)
		.pipe(plugins.sass({
			includePaths: ['./src/components/bootstrap-sass-official/assets/stylesheets']
		}))
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('scripts', function() {

});

gulp.task('serve', function() {
	browserSync({
	  notify: false,
    port: 4000,
    server: ['dist']
	});
});

gulp.task('default', ['sass', 'serve'], function() {
	gulp.watch(paths.sass, ['sass']);
	gulp.watch('*.html', ['bs-reload']);
});
