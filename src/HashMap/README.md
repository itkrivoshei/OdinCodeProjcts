# 🗺️ HashMap Project

This project is part of the curriculum from [The Odin Project](https://github.com/TheOdinProject), focusing on creating a hash map data structure in TypeScript.

## 🚀 Quickstart

1. Clone the repository:
   ```
   git clone https://github.com/itkrivoshei/OdinCodeProjcts.git
   ```
2. Install dependencies at the root of the repository:
   ```
   npm i
   ```
3. Run tests for the HashMap project:
   ```
   npm test src/HashMap/tests/hashMap.test.ts
   ```

## 🧬 Code and Test Overview

The project includes a `HashMap` class with various methods to manipulate the hash map data structure. Tests for these methods are located in the [tests directory](tests/).

| Function  | Description                       | Accepts                   | Returns              |
| --------- | --------------------------------- | ------------------------- | -------------------- |
| `set`     | 🔑 Sets a key-value pair.         | `(key: string, value: T)` | `void`               |
| `get`     | 📤 Gets the value for a key.      | `(key: string)`           | `T \| null`          |
| `has`     | 📍 Checks if a key is in the map. | `(key: string)`           | `boolean`            |
| `remove`  | 🗑️ Removes a key from the map.    | `(key: string)`           | `boolean`            |
| `length`  | 📏 Returns the number of entries. | `()`                      | `number`             |
| `clear`   | 🧹 Clears all entries.            | `()`                      | `void`               |
| `keys`    | 🔑 Returns all keys.              | `()`                      | `string[]`           |
| `values`  | 📤 Returns all values.            | `()`                      | `T[]`                |
| `entries` | 📜 Returns all entries.           | `()`                      | `Array<[string, T]>` |

## [📝 Assignment](https://www.theodinproject.com/lessons/javascript-hashmap)

The assignment involves implementing the `HashMap` and `HashSet` classes with methods to handle basic operations such as adding, retrieving, checking, and deleting entries in the hash map.

---

### ℹ️ See Main [README](../../README.md) for more info.
