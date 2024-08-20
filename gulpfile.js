const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const fs = require('fs');


// Function for compiling Sass
function compileSass() {
  const outputPath = './public/css';
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true }); // Create the directory if it doesn't exist
  }

  return src('./sass/**/*.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(dest(outputPath));
}

// Function for watching Sass files
function watchSass() {
  watch('./sass/**/*.scss', compileSass);
}

// Named task for clarity
exports.sass = watchSass;
