gulp-pug
========
> Gulp plugin for compiling Pug templates.

A Gulp plugin for compiling Pug templates.  In order to use, you must install a version of `pug` alongside `gulp-pug`...  This is so `gulp-pug` can rely on the version of `pug` that you want.

## Installation
```shell
$ npm install --save-dev gulp-pug pug
```

## Usage
```javascript
var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task('build', function build() {
  return gulp.src('views/**.pug')
    .pipe(pug(options))
    .pipe(gulp.dest('out'));
});
```

### `pug(options)`
Compile Pug files to HTML files.
 - `options` (`Object`): Any of [Pug's options](http://pug-lang.com/api/) you want to use.

Example:
```javascript
// ...
.pipe(pug({ pretty: true }))
.pipe(gulp.dest(out));
```

## Credits
|![Jamen Marz][jamen-image]|
|:--------:|
| [@jamen] |

## License
[MIT][license] &copy; Jamen Marzonie

<!-- All links must be "tagged" -->
 [@jamen]: https://github.com/jamen
 [jamen-image]: https://avatars2.githubusercontent.com/u/6251703?v=3&s=125

 [license]: LICENSE
