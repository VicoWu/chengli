/**
 * @file gulp配置
 *
 * @author fanxingguang(fanxingguang@baidu.com)
 * 2016年6月28日
 */

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var less = require('gulp-less');

gulp.task('less', function () {
    gulp.src('./css/*.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
    gulp.watch('./css/*.less', ['less']);
});


gulp.task('default', [
    'less',
    'watch'
]);
