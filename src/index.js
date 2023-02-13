import fs from "fs";
import path from "path";
import { getRange, prepareArray, shuffleArray } from "./utils.js";

const main = () => {
  const [start, finish] = getRange();
  const shuffled = shuffleArray(prepareArray(start, finish));

  fs.writeFileSync(path.join("./", "randomisedSequence.txt"), shuffled);

  console.info("\nOutput was saved to 'randomisedSequence.txt'");
};

main();
