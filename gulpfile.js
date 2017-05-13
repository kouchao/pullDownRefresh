var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	stripDebug = require('gulp-strip-debug'),
	rename = require("gulp-rename");

// 压缩 js 文件
gulp.task('default', function() {
	gulp.src([
		    "demo/js/libs/pullDownRefresh.js",
		  ])
		.pipe(uglify())
		.pipe(rename(function(path){
			path.basename += ".min"
		}))
		.pipe(gulp.dest('dist/'))
});