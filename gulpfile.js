var gulp = require("gulp");
var publish = require("@pentia/publish-projects")
var foreach = require("gulp-foreach");

gulp.task("Auto-Publish-Views", function (callback) {
  var root = "./src";
  var roots = [root + "/**/Views", "!" + root + "/**/obj/**/Views"];
  var files = "/**/*.cshtml";

  gulp.src(roots, { base: root }).pipe(
    foreach(function (stream, rootFolder) {
      gulp.watch(rootFolder.path + files, function (event) {
        if (event.type === "changed") {
          console.log("file: " + event.path + " has changed");
          var viewPathIndex = event.path.toLocaleLowerCase().indexOf("views");
          var projectPath = event.path.slice(0,viewPathIndex);
          publish.publish.publishProjects(projectPath);
          publish.deleteConfig.delete(callback);
        }
      });
      return stream;
    })
  );
});
