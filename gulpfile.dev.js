var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer'); // 处理css中浏览器兼容的前缀  
var rename = require('gulp-rename'); //重命名  
var cssnano = require('gulp-cssnano'); // css的层级压缩合并
var less = require('gulp-less'); //less
// var jshint = require('gulp-jshint'); //js检查 ==> npm install --save-dev jshint gulp-jshint（.jshintrc：https://my.oschina.net/wjj328938669/blog/637433?p=1）
var uglify = require('gulp-uglify'); //js压缩
var concat = require('gulp-concat'); //合并文件
var imagemin = require('gulp-imagemin'); //图片压缩
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var fs = require('fs');
var merge = require('merge-stream');
var path = require('path');
//======= gulp dev 开发环境下 ===============

var srcPath = 'src';
var distPath = 'dist'

function getFolders(dir) {
    return fs.readdirSync(dir)
        .filter(function (file) {
            return fs.statSync(path.join(dir, file)).isDirectory();
        });
}

function dev() {
    var folders = getFolders(srcPath);

    /**
     * HTML处理
     */
    gulp.task('html:dev', function () {
        var tasks = folders.map(function (folder) {
            return gulp.src(path.join(srcPath, folder, '/*.html')).pipe(gulp.dest(path.join(distPath, folder))).pipe(reload({
                stream: true
            }));
        })
        return merge(tasks);
    });
    /**
     * common样式处理
     */
    gulp.task('common:dev', function () {
        return gulp.src('./src/common.less').pipe(autoprefixer('last 2 version')).pipe(less()).pipe(gulp.dest('./dist/')).pipe(reload({
            stream: true
        }));
    });
    /**
     * css
     */
    gulp.task('css:dev', function () {
        var tasks = folders.map(function (folder) {
            return gulp.src(path.join(srcPath, folder, 'css/*.css')).pipe(autoprefixer('last 2 version')).pipe(gulp.dest(path.join(distPath, folder, '/css'))).pipe(reload({
                stream: true
            }));
        })
        return merge(tasks);
    });
    /**
     * LESS样式处理
     */
    gulp.task('less:dev', function () {
        var tasks = folders.map(function (folder) {
            return gulp.src(path.join(srcPath, folder, 'less/*.less')).pipe(autoprefixer('last 2 version')).pipe(less()).pipe(gulp.dest(path.join(distPath, folder, '/css'))).pipe(reload({
                stream: true
            }));
        })
        return merge(tasks);
    });
    /**
     * js处理
     */
    gulp.task('zepto:dev', function () {
        return gulp.src('./src/zepto.min.js').pipe(gulp.dest('./dist/')).pipe(reload({
            stream: true
        }));
    });
    /**
     * js处理
     */
    gulp.task('js:dev', function () {
        var tasks = folders.map(function (folder) {
            return gulp.src(path.join(srcPath, folder, 'js/*.js')).pipe(gulp.dest(path.join(distPath, folder, '/js'))).pipe(reload({
                stream: true
            }));
        })
        return merge(tasks);
    });
    /**
     * 图片处理
     */
    gulp.task('images:dev', function () {
        var tasks = folders.map(function (folder) {
            return gulp.src(path.join(srcPath, folder, 'images/*')).pipe(imagemin({
                optimizationLevel: 3
                , progressive: true
                , interlaced: true
            })).pipe(gulp.dest(path.join(distPath, folder, '/images'))).pipe(reload({
                stream: true
            }));
        })
        return merge(tasks);
    });
    gulp.task('dev', ['html:dev', 'common:dev', 'zepto:dev', 'css:dev', 'less:dev', 'js:dev', 'images:dev'], function () {
        browserSync.init({
            server: {
                baseDir: './',
            }
            , notify: false
        });
        // Watch .html files


        var tasks = folders.map(function (folder) {
            console.log(folder)
            gulp.watch(path.join(srcPath, folder, '*.html'), ['html:dev']);
            // Watch .less files
            gulp.watch(path.join(srcPath, folder, 'css/*.css'), ['css:dev']);
            // Watch .less files
            gulp.watch(path.join(srcPath, folder, 'less/*.less'), ['less:dev']);
            // Watch .common files
            gulp.watch(('./src/common.less'), ['common:dev']);
            // Watch .js files
            gulp.watch(path.join(srcPath, folder, 'js/*.js'), ['js:dev']);
            // Watch image files
            gulp.watch(path.join(srcPath, folder, 'images/*'), ['images:dev']);
        })
    });
}
//======= gulp dev 开发环境下 ===============
module.exports = dev;