const path = require("path");
const fs = require("fs");

const NAME_FILE_PAGES = "pages.ts";
const NAME_FILE_COMPONENTS = "components.ts";
const NAME_FILE_VARIANTS = "variants.ts";
const NAME_FILE_DOCS = "docs.ts";
const NAME_FILE_CODE = "codes.ts";
const DIR_COMPONENTS = "../../components";
const DIR_PAGES = "../";

const searchFiles = (dir, match, done) => {
  let results = [];
  fs.readdir(dir, (err, lists) => {
    if (err) {
      return done(err);
    } else {
      let pending = lists.length;
      if (!pending) {
        return done(null, results);
      }
      lists.forEach((file) => {
        const f = path.resolve(dir, file);
        fs.stat(f, (error, stat) => {
          if (error) {
            return done(error);
          } else if (stat && stat.isDirectory()) {
            searchFiles(f, match, (e, res) => {
              results = results.concat(res);
              if (!--pending) {
                done(null, results);
              }
            });
          } else {
            if (f.match(match)) {
              results.push(f);
            }
            if (!--pending) {
              done(null, results);
            }
          }
        });
      });
    }
  });
};

const runSearchFile = (match, dirFile, dirSearch) => {
  searchFiles(path.resolve(__dirname, dirSearch), match, (error, results) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      process.exitCode = 1;
      return;
    }

    const exports = results.sort().map((result) => {
      const importPath = path
        .relative(__dirname, result)
        .replace(/\\/g, "/")
        .replace(/\.tsx?$/i, "");

      return `export { default as ${
        path.basename(result).split(".")[0]
      } } from "${importPath}";`;
    });

    fs.writeFile(
      path.resolve(__dirname, dirFile),
      exports.length ? `${exports.join("\n")}\n` : "",
      (writeError) => {
        if (writeError) {
          // eslint-disable-next-line no-console
          console.error(writeError);
          process.exitCode = 1;
        }
      }
    );
  });
};

runSearchFile(/.*\.page?/gi, NAME_FILE_PAGES, DIR_PAGES);
runSearchFile(/.*\.site?/gi, NAME_FILE_COMPONENTS, DIR_COMPONENTS);
runSearchFile(/.*\.variants?/gi, NAME_FILE_VARIANTS, DIR_COMPONENTS);
runSearchFile(/.*\.docs?/gi, NAME_FILE_DOCS, DIR_COMPONENTS);
runSearchFile(/.*\.code?/gi, NAME_FILE_CODE, DIR_COMPONENTS);
