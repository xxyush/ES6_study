import gulp from "gulp";
import gulpif from "gulp-if";
import contact from "gulp-contact";
import gulpWebpack from "webpack-stream";
import named from "vinyl-named";
import livereload from "gulp-livereload";
import plumber from "gulp-plumber";
import rename from "gulp-rename";
import uglify from "gulp-uglify";
import {log,colors} from "gulp-util";
import args from "./util/args;

gulp.task("scripts",()=>{
	return gulp.src(['app/js/index.js'])
	.pipe(plumber({
		errorHandle:function(){

		}
	}))
})


