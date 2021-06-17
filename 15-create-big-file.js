const { writeFile } = require("fs").promises;

const writeBigFile = async () => {
  for (let i = 0; i < 100000; i++) {
    await writeFile("./content/big.txt", `Hello world ${i + 1}\n`, {
      flag: "a",
    });
  }
};

writeBigFile();
