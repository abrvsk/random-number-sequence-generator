import { prepareArray, shuffleArray } from "../src/utils.js";

describe("Shuffle Array", () => {
  it("should have correct sum for integers from 1 to 10,000", () => {
    const sequencedArray = prepareArray(1, 10000);
    const shuffled = shuffleArray(sequencedArray);

    const sum = shuffled.reduce((acc, num) => acc + num, 0);

    expect(sum).toBe(50005000);
  });

  it("should produce different result during consecutive runs", () => {
    const sequencedArray = prepareArray(1, 10000);
    const firstRun = shuffleArray(sequencedArray);
    const secondRun = shuffleArray(sequencedArray);

    expect(firstRun).not.toEqual(secondRun);
  });
});
