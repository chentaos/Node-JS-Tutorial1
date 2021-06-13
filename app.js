//Modules
//CommonJs, every file is module(by default)
//Module    -Encapsulated Code(only share minimum)

const names = require("./4-names");
console.log(names);

const sayHi = require("./5-utils");
sayHi("Chentao");
sayHi(names.John);
sayHi(names.Peter);
