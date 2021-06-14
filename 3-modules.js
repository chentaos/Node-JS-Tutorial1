//Modules
//CommonJs, every file is module(by default)
//Module    -Encapsulated Code(only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
const a = require("./7-mind-grenade");

// sayHi("Chentao");
// sayHi(names.John);
// sayHi(names.Peter);
// sayHi(data.person.name);
// sayHi(data.item);

console.log(a);
a();
