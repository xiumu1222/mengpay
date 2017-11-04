var gulp = require('gulp');
var mkdirp = require('mkdirp');
//======= gulp init 初始化项目结构 ===============
function init() {
    /** 
     * 初始化项目结构
     */
    gulp.task('init', function () {
        mkdirp.sync('/dist');
    });
}
module.exports = init;