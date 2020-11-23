var gulp = require('gulp');
var sass = require('gulp-sass');

/* Coverting SCSS to CSS */
gulp.task('sass', function() {
    return gulp.src('app/sass/main.sass')
        .pipe(sass())
        .pipe(gulp.dest('app/CSS'))
});

/* Gulp Watch */
gulp.task('watch', function() {
    gulp.watch('app/sass/**/*.sass', gulp.series('sass'));
})