const { src, dest, series, parallel, watch } = require('gulp');
const fileinclude = require('gulp-file-include');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();


//js task
gulp.task('js', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});
//html task
gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});
//scss task
gulp.task('scss', function() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

//img task
gulp.task('img', function() {
    return gulp.src('app/img/**/*.+(jpg|jpeg|png|gif)',{encoding: false})
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true
        }))
        .pipe(dest('dist/imgs'))
});

// gulp.task('img', function() {
//     return gulp.src('app/img/**/*.+(jpg|jpeg|png|gif)',{encoding: false})
//         .pipe(imagemin())
//         .pipe(gulp.dest('dist/imgs'))
//         .on('data',function(file){
//             console.log('Processing file:',file.path);
//         })
//         .on('end', function(){
//             console.log('Done');
//         });
// });

// BrowserSync task
gulp.task('serve', function() {
    browserSync.init({
        server: 'dist'
    });

    gulp.watch('src/*.html', gulp.series('html'));
    gulp.watch('src/scss/**/*.scss', gulp.series('scss'));
    gulp.watch('src/js/**/*.js', gulp.series('js'));
    gulp.watch('src/img/**/*', gulp.series('img'));
});

gulp.task('default', gulp.series(
    gulp.parallel('html', 'scss', 'js' ,'img'), 'serve'
));
exports.default = series('html', 'scss', 'js', 'img', 'serve');