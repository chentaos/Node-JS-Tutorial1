const path = require("path");
console.log(path.sep);

const filePath = path.join("./conten", "1", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "1", "test.txt");
console.log(absolute);
