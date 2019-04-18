const gulp = require('gulp');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');

gulp.task('js', () => {
    return gulp.src('src/client/src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('src/server/public'));
});

gulp.task('html', () => {
    return gulp.src('src/client/src/html/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
          }))
        .pipe(gulp.dest('src/server/public'));
});

gulp.task('sass', () => {
    return gulp.src('src/client/src/styles/styles.sass')
       .pipe(sass())
       .pipe(gulp.dest('src/server/public'));
 });

gulp.task('watch', () => {
    gulp.watch('src/client/src/js/*.js', gulp.series('js'));
    gulp.watch('src/client/src/html/*.html', gulp.series('html'));
    gulp.watch('src/client/src/styles/styles.sass', gulp.series('sass'));
});

gulp.task( 'build',  gulp.series('html', 'js', 'sass', 'watch'));

