const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

gulp.task('es6', () => {
	return gulp.src('src/app.js')
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('build'));
});

gulp.task('default', () => {
	gulp.start('es6');
	gulp.watch('src/*.*', ['es6'])
});