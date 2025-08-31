const path = require("path");

console.log("FILENAME: ", __filename);
console.log("DIRNAME: ", __dirname);

const filepath = path.join("folder", "students", "data.txt");

console.log(filepath);

const parsedPathData = path.parse(filepath);
const resolvedPath = path.resolve(filepath);
const extname = path.extname(filepath);
const basename = path.basename(filepath);
const dirname = path.dirname(filepath);

console.log({
  parsedPathData,
  resolvedPath,
  extname,
  basename,
  dirname,
});
