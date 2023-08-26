const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps');



function buildStyles() {
    return src('assets/scss/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(dest('assets/css'))
}
function watchTask() {
    watch(['assets/scss/**/*.scss'], buildStyles)
}
exports.default = series(buildStyles, watchTask)