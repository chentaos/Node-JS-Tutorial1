const { readFile, writeFile } = require("fs").promises;
const { readFileSync, writeFileSync } = require("fs");

const start = async () => {
  const first = await readFile("./content/first.txt", "utf8");
  const second = await readFile("./content/second.txt", "utf8");
  await writeFile(
    "./content/result-mind-grenade.txt",
    `This is AWESOME : ${first} ${second}`,
    { flag: "a" }
  );
};

const syncStart = () => {
  const first = readFileSync("./content/first.txt", "utf8");
  const second = readFileSync("./content/second.txt", "utf8");

  writeFileSync(
    "./content/result-sync.txt",
    `Here is the result : ${first + second} `,
    { flag: "a" }
  );
};

console.time("test");
for (let i = 0; i < 1000; i++) {
  //   syncStart();
  start();
}
console.timeEnd("test");
console.log("End");
