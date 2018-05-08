// 处理任务
var gulp = require ('gulp')
var imagemin = require('gulp-imagemin')//图片所需压缩模块
var uglify = require('gulp-uglify')//js压缩所需模块
var sass = require('gulp-sass')//转换sass
var concat = require('gulp-concat');//合并代码
var connect = require('gulp-connect');
var browserSync = require('browser-sync').create()
/*
*
* 常用方法
*
* gulp.task---定义任务
*
* gulp.src ---找到需要执行任务的文件
*
* gulp.dest ---执行任务文件的去处
*
* gulp.watch ---观察文件是否发生变化
*
*
* */

// 定义任务

gulp.task('message',function(){
    return console.log('Gulp is running!!')
})
//执行任务  gulp message

/*//定义默认任务
gulp.task('default',function(){
    return console.log('这里是默认执行的任务，只需要执行gulp 即可')
})*/

//拷贝文件
gulp.task('copyHtml',function(){
    gulp.src("src/*.html")
        .pipe(gulp.dest("dist"))
})

//图片压缩
gulp.task('imageMin',function(){
    gulp.src("src/images/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/images"))
})

//压缩js
gulp.task('minify',function () {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
})

//sass转换为css
gulp.task('sass',function () {
    gulp.src('src/sass/style.scss')
    gulp.src('src/sass/sass2.scss')
    gulp.src('src/sass/Treasury.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('src/css'))
        // .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
})


//代码合并
gulp.task('concat',function () {
    gulp.src('src/js/*.js')
        .pipe(concat('main.js'))//h合并完之后名字
        // .pipe(uglify())
        .pipe(gulp.dest('src/jssss'))
        .pipe(browserSync.stream());
})


gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./src"
    });

    gulp.watch("src/sass/*.scss", ['sass']);
    gulp.watch('src/js/*.js',['concat']);
    // gulp.watch("src/*.html" ,browserSync.reload);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('default',['serve']);

//定义默认任务==执行多个任务
// gulp.task('default',['connect', 'watch'])