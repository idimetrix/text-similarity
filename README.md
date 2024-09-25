# **text-similarity**

The textSimilarity function calculates the similarity between two strings using a substring matching approach. It can be customized with a specified substring length and case sensitivity. The function boosts the score if one string starts with or contains the other, and it returns a similarity score between 0 and 1.

## Installation

You can install the package using **npm**, **yarn**, or **pnpm**.

```bash
pnpm add text-similarity

yarn install text-similarity

npm install text-similarity
```

## Usage

```tsx
import { textSimilarity } from "text-similarity";

const similarity1 = textSimilarity('hello world', 'hello', 2); // Default parameters (substring length: 2, case insensitive)
console.log(similarity1); 

const similarity2 = textSimilarity('JavaScript', 'javascript', 2, true); // Comparison is case-sensitive and the strings differ in case
console.log(similarity2); 


const similarity3 = textSimilarity('apple pie', 'apple', 3); // Substring length of 3, ignoring case by default
console.log(similarity3); 
```

## tsup

Bundle your TypeScript library with no config, powered by esbuild.

https://tsup.egoist.dev/

## How to use this

1. install dependencies

```
# pnpm
$ pnpm install

# yarn
$ yarn install

# npm
$ npm install
```

2. Add your code to `src`
3. Add export statement to `src/index.ts`
4. Test build command to build `src`.
   Once the command works properly, you will see `dist` folder.

```zsh
# pnpm
$ pnpm run build

# yarn
$ yarn run build

# npm
$ npm run build
```

5. Publish your package

```zsh
$ npm publish
```

## test package

https://www.npmjs.com/package/text-similarity
