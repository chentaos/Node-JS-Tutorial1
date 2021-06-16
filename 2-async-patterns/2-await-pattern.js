const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  const first = await readFile("./content/first.txt", "utf8");
  const second = await readFile("./content/second.txt", "utf8");
  await writeFile(
    "./content/result-mind-grenade.txt",
    `This is AWESOME : ${first} ${second}`,
    { flag: "a" }
  );
};

start();

console.log("End");
