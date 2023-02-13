import readline from "readline-sync";

export const getRange = () => {
  const start = readline.questionInt("Start sequence from: ") || 1;
  const finish = readline.questionInt("\nEnd sequence with: ") || 2;

  if (start >= finish) {
    console.info(
      "finish could not be less or equal to start, please enter valid values"
    );
    return getRange();
  }

  return [start, finish];
};

export const prepareArray = (start, finish) =>
  Array.from({ length: finish - start + 1 }, (_, i) => start + i);

export const shuffleArray = (arr) => {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};
