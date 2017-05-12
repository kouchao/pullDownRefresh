var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	stripDebug = require('gulp-strip-debug');

// 压缩 js 文件
gulp.task('default', function() {
	gulp.src([
		    "src/js/libs/pullDownRefresh.js",
		  ])
		.pipe(uglify())
		.pipe(gulp.dest('dist/'))
});