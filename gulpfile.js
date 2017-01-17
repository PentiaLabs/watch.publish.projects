var gulp = require("gulp");
var publish = require("@pentia/publish-projects")
var foreach = require("gulp-foreach");
var path = require("path");
var glob = require("glob");

gulp.task("Auto-Publish-Views", function (callback) {
  var root = "./src";
  var roots = ["./src/**/Views/**/*.cshtml", "!./src/**/obj/**/*.cshtml"];

	gulp.watch(roots, function (event) {
		console.log(event);
		if (event.type === "changed") {
			console.log("file: " + event.path + " has changed");
			var viewPathIndex = event.path.toLocaleLowerCase().indexOf("views");
			var projectPath = event.path.slice(0,viewPathIndex);
			publish.publish.publishProjects(projectPath);
			publish.deleteConfig.delete();
		}
	});
});

