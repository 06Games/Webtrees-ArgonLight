/************************************************
                Argon Light Theme
             Originally made by jchue
  Under the Internet Systems Consortium License
  https://github.com/jchue/argon-webtrees-theme

       Forked and maintained by Evan Galli
             Under the same licence
 https://github.com/06Games/Webtrees-ArgonLight
***********************************************/

const gulp = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');

const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

const del = require('del');

/* Sass/CSS */

function buildWebtreesCss(){
    const plugins = [
        require('postcss-import')
    ];

    return gulp.src('src/css/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('resources/css'))
        .pipe(postcss([ require("cssnano") ]))
        .pipe(rename(function(path) {
            path.extname = ".min.css";
        }))
        .pipe(gulp.dest('resources/css'))
}

function scss() {
    const plugins = [
        require('autoprefixer'),
        require("postcss-url")({url: 'inline'}), // Inline assets using base64 encoding
        require('postcss-prettify')
    ];

    // noinspection JSCheckFunctionSignatures
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(postcss(plugins))
        .pipe(gulp.dest('resources/css'))
        .pipe(postcss([ require("cssnano") ]))
        .pipe(rename(function(path) {
            path.extname = ".min.css";
        }))
        .pipe(gulp.dest('resources/css'))
}

function cssBuild() {
    return gulp.src('resources/css/**/*')
        .pipe(gulp.dest('dist/resources/css/'));
}

/* JavaScript */

function jsTranspile() {
    return gulp.src('src/js/*.js')
    .pipe(babel())
    .pipe(gulp.dest('resources/js/'));
}

function jsBuild() {
    return gulp.src('resources/js/**/*')
    .pipe(uglify())
    .pipe(gulp.dest('dist/resources/js/'));
}

/* Webtrees */

function copyViews() {
    return gulp.src('resources/views/**/*')
    .pipe(gulp.dest('dist/resources/views/'));
}

function copyModule() {
    return gulp.src('module.php')
    .pipe(gulp.dest('dist/'));
}

/* Utilities */

function clean() {
    return del('dist/**/*');
}

function watch() {
    gulp.watch(['src/scss/**/*.scss'], scss);
    //gulp.watch(['src/js/**/*.js'], jsTranspile);
}

exports.watch = watch;
exports.build = gulp.series(
    clean,
    gulp.parallel(buildWebtreesCss, scss),
    gulp.parallel(cssBuild, copyViews, copyModule)
);
exports.default = gulp.parallel(buildWebtreesCss, scss);
