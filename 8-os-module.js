const os = require("os");

//info about current user
const user = os.userInfo();
console.log(user);

//the function to return system uptime in minute
console.log(`The System Uptime is ${os.uptime() / 60} minutes`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
