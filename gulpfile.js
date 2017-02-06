var gulp = require('gulp');
var publish = require('@pentia/publish-projects');
var gutil = require('gulp-util');

gulp.task('Auto-Publish-Views', function () {
	var roots = ['./src/**/Views/**/*.cshtml', '!./src/**/obj/**/*.cshtml'];

	gulp.watch(roots, function (event) {
		gutil.log('File ' +  gutil.colors.blue(event.path) + ' has ' + event.type);
		if (event.type === 'changed') {
			var viewPathIndex = event.path.toLocaleLowerCase().indexOf('views');
			var projectPath = event.path.slice(0,viewPathIndex);
			publish.publish.publishProjects(projectPath);
			publish.deleteConfig.delete();
		}
	});
});
