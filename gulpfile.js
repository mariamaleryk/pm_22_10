const gulp = require("gulp");
const { src, dest, series, parallel, watch } = require('gulp');
const file_include = require('gulp-file-include')
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
// html task
const html_task = () =>  src('app/*.html')
    .pipe(file_include({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(dest('dist'))
    .pipe(browserSync.stream());
//js task
const js_task = () => src('app/js/*.js')
    .pipe(concat('script.min.js'))
    //.pipe(uglify())
    .pipe(dest('dist/js'));

//scss task
const scss_task = () => {
    return src('app/scss/*.scss') // Select all SCSS files
        .pipe(sass().on('error', sass.logError)) // Compile SCSS to CSS, handle errors
        .pipe(cssnano()) // Minify CSS
        .pipe(rename({suffix: '.min'})) // Add .min suffix to the output file
        .pipe(dest('dist/css')) // Output to 'dist/css' folder
        .pipe(browserSync.stream()); // Reload BrowserSync
};
//img tadk
const img_task = () =>  src('app/img/*.+(jpg|jpeg|svg|png|gif)',{encoding: false})
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        interlaced: true
    }))
    .pipe(dest('dist/img'))
// BrowserSync task
const browserSync_task = () => browserSync.init(
    {
        server: {
            baseDir: './dist'
        }
    });
//watch task
const watch_task = () => {
    browserSync_task();
    watch('app/*.html', parallel(html_task));
    watch('app/scss/*.scss', parallel(scss_task));
    watch('app/js/*.js', parallel(js_task));
    // watch('app/css/*.css', parallel(css_task));
    watch('app/img/*.+(jpg|jpeg|png|gif', img_task);
}
exports.default = series(html_task, scss_task/*,css_task*/, img_task, watch_task,js_task );