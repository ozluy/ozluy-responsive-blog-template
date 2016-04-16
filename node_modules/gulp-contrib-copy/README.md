# gulp-contrib-copy
Gulp: Copy files from source to destination <br>

## Installation
```javascript
npm install gulp-contrib-copy --save-dev
````

## Usage
```javascript
var copy = require('gulp-contrib-copy');

gulp.task('copy', function() {
	gulp.src('src/**/*')
		.pipe(copy())
	    .pipe(gulp.dest('dest/'));
```

## Note
`This package is process of being created. Please be patient. Feel free to contribute if you like.`