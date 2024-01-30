# 🔗 LinkedList Project

This project is part of the [JavaScript course](https://www.theodinproject.com/lessons/javascript-linked-lists) from The Odin Project, focusing on creating a linked list data structure in TypeScript.

## 🚀 Quickstart

1. Clone the repository:
   ```
   git clone https://github.com/itkrivoshei/OdinCodeProjcts.git
   ```
2. Install dependencies at the root of the repository:
   ```
   npm i
   ```
3. Run tests for the LinkedList project:
   ```
   npm test src/LinkedLists/tests/linkedList.test.ts
   ```

## 🧬 Code and Test Overview

The project includes a `LinkedList` class with various methods. Tests for these methods are located in the [tests directory](tests/).

| Function   | Description                             | Accepts                     | Returns           |
| ---------- | --------------------------------------- | --------------------------- | ----------------- |
| `append`   | 📌 Adds a node to the end.              | `(T)`                       | `void`            |
| `prepend`  | 📍 Adds a node to the start.            | `(T)`                       | `void`            |
| `size`     | 📏 Returns the number of nodes.         | `()`                        | `number`          |
| `getHead`  | 🤲 Returns the first node.              | `()`                        | `Node<T> \| null` |
| `getTail`  | 🦶 Returns the last node.               | `()`                        | `Node<T> \| null` |
| `at`       | 🔍 Returns the node at the given index. | `(index: number)`           | `Node<T> \| null` |
| `pop`      | 🎈 Removes the last element.            | `()`                        | `void`            |
| `contains` | 🧐 Checks if a value is in the list.    | `(T)`                       | `boolean`         |
| `find`     | 🔎 Finds the index of a value.          | `(T)`                       | `number \| null`  |
| `toString` | 🖨️ Returns a string representation.     | `()`                        | `string`          |
| `insertAt` | ➕ Inserts a node at the given index.   | `(value: T, index: number)` | `void`            |
| `removeAt` | ➖ Removes the node at the given index. | `(index: number)`           | `void`            |

## [📝 Assignment](https://www.theodinproject.com/lessons/javascript-linked-lists#project-solution)

The project involves implementing a `LinkedList` and `Node` class with methods to manipulate the linked list data structure as described in the table above.

---

### ℹ️ See Main [README](../../) for more info.
