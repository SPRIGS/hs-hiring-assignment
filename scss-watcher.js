const fs = require("fs");
const glob = require("glob");
const sass = require("sass");
const path = require("path");
const chalk = require("chalk");

console.log(chalk.green(`Watching for sass changes`));

glob(__dirname + "/sprigs-hs-theme/**/*.scss", {}, (err, files) => {
  files.forEach((filePath) => {
    fs.watch(filePath, (event, filename) => {
      if (filename) {
        console.log(chalk.yellow(`${filename} file Changed`));

        let result = sass.compile(filePath);
        let callback = (err) => {
          if (err) console.log(chalk.red(err));
        };
        let modulePath = path.parse(filePath).dir;
        if (filename == 'global.scss') {
          fs.writeFile(`${modulePath}/global.css`, result.css, callback);
        } else {
          fs.writeFile(`${modulePath}/module.css`, result.css, callback);
        }
      }
    });
  });
});
