# random-number-sequence-generator

Generate sequence of unique integers between N and K (provided on input) in random order on every run.

I've spent some time trying to figure out a true randomising algorithm for this task. And although the solution I came up with was cool and recursive and had bells and wistles, it did not provide true randomness. So I've googled the options and 3 hours later I've made my choice. As a basis I'm using [Knuth-Fisher-Yates algorithm](https://en.wikipedia.org/wiki/Fisher–Yates_shuffle) of true un-biased randomiser with an amazing complexity of O(n).

### Installation

After cloning the repo run

```
yarn
```

### Running the app

To start run

```
yarn start
```

And follow the prompts in the terminal.

On incorrect inputs (like float or `start` being bigger than `end`) you will have to start again.

The output will be saved to `<path-to-directory>/randomisedSequence.txt`

### Testing

```
yarn test
```
