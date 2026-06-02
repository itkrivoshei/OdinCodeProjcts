<div align="center">

# TypeScript Algorithms and Data Structures

TypeScript implementations of common algorithms and data structures with Jest tests, linting, formatting checks, a static browser playground, and CI/CD.

[![Playground](https://img.shields.io/badge/playground-GitHub%20Pages-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white)](https://itkrivoshei.github.io/typescript-algorithms-data-structures/)
[![CI/CD](https://img.shields.io/github/actions/workflow/status/itkrivoshei/typescript-algorithms-data-structures/ci-cd.yml?branch=main&style=for-the-badge&label=ci%2Fcd&logo=githubactions&logoColor=white)](https://github.com/itkrivoshei/typescript-algorithms-data-structures/actions/workflows/ci-cd.yml)
[![CodeQL](https://img.shields.io/github/actions/workflow/status/itkrivoshei/typescript-algorithms-data-structures/codeql.yml?branch=main&style=for-the-badge&label=codeql&logo=github&logoColor=white)](https://github.com/itkrivoshei/typescript-algorithms-data-structures/actions/workflows/codeql.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](package.json)
[![Jest](https://img.shields.io/badge/Jest-29-c21325?style=for-the-badge&logo=jest&logoColor=white)](jest.config.js)
[![License](https://img.shields.io/github/license/itkrivoshei/typescript-algorithms-data-structures?style=for-the-badge)](LICENSE)

</div>

## Library Surface

| Area                | Source                  | Coverage                                              |
| ------------------- | ----------------------- | ----------------------------------------------------- |
| Binary search trees | `src/BinarySearchTrees` | insert, delete, traversals, balance checks, rebalance |
| Hash map / hash set | `src/HashMap`           | set/get/remove/resize, key/value/entry views          |
| Linked list         | `src/LinkedLists`       | append, prepend, find, insert, remove, stringify      |
| Knight path search  | `src/KnightsTravails`   | BFS shortest path on an 8x8 board                     |
| Recursion           | `src/Recursion`         | Fibonacci variants and merge sort                     |
| Test functions      | `src/TestingPractice`   | small utility functions with Jest tests               |

`src/CosineSimilarity/CosineSimilarity.cpp` is a standalone C++ file and is outside the TypeScript build.

## Browser Playground

The Pages playground is generated from `demo/` into `dist/demo`.

It includes runnable examples for Fibonacci, merge sort, and binary search, with source links back into the repository.

## Local Setup

```bash
git clone https://github.com/itkrivoshei/typescript-algorithms-data-structures.git
cd typescript-algorithms-data-structures
nvm use
npm ci
```

## Commands

| Command                  | Description                            |
| ------------------------ | -------------------------------------- |
| `npm test`               | Run Jest tests                         |
| `npm run test:watch`     | Run Jest in watch mode                 |
| `npm run typecheck`      | Type-check main source                 |
| `npm run typecheck:demo` | Type-check playground source           |
| `npm run lint`           | Run ESLint over `src` and `demo`       |
| `npm run format:check`   | Check Prettier formatting              |
| `npm run build:demo`     | Build `dist/demo`                      |
| `npm run build`          | Type-check source and build playground |
| `npm run ci`             | Run the full verification gate         |

## Docker Verification

```bash
docker build -t ts-algorithms .
docker run --rm ts-algorithms
```

## Automation

`.github/workflows/ci-cd.yml` installs dependencies, runs `npm run ci`, builds the playground on pushes to `main`, and deploys `dist/demo` to GitHub Pages. Dependabot updates npm packages and GitHub Actions.

## License

[MIT](LICENSE)
