# 🐴 Knights Travails Project

A TypeScript project from [The Odin Project](https://github.com/TheOdinProject) to compute the shortest path for a knight's movement on a chessboard.

## 🚀 Quickstart

To try out the knight's moves:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/itkrivoshei/OdinCodeProjcts.git
   ```
2. **Install dependencies:**
   ```sh
   npm i
   ```
3. Run tests for the KnightsTravails project:
   ```sh
   npm test src/KnightsTravails/tests/knightsTravails
   ```

## 🧩 Project Structure

The project includes a primary TypeScript file that houses the main functionality and a test suite for validating the logic:

- [`knightsTravails.ts`](knightsTravails.ts): Contains the `knightMoves` function logic.
- [`knightsTravails.test.ts`](tests/knightsTravails.test.ts): Provides test cases for `knightMoves`.

## 🛠️ Using knightMoves

Invoke the `knightMoves` function with two sets of coordinates to see the shortest path:

```ts
import { knightMoves } from './knightsTravails';

const start = { x: 0, y: 0 };
const end = { x: 1, y: 2 };

console.log(knightMoves(start, end));
```

## [📝 Assignment](https://www.theodinproject.com/lessons/javascript-knights-travails#assignment)

The task is to implement `knightMoves` that shows the shortest path a knight can take on the chessboard. The function outputs all squares the knight will stop on along the way.

---

### ℹ️ See Main [README](../../) for more info.
