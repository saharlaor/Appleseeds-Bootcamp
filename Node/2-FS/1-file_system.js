const fs = require("fs");

const errFunc = () => (err) => err && console.log(`err`, err);

fs.writeFile("new.txt", "A new text file", errFunc);
fs.copyFile("new.txt", "newer.txt", errFunc);
fs.rename("new.txt", "newest.txt", errFunc);
fs.readdir("./", (err, files) => {
  errFunc();
  files && console.log(files.join(", "));
});
fs.readFile("1-file_system.js", (err, data) => {
  errFunc();
  data && console.log(data.toString());
});
