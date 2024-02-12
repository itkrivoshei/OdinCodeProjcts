# 🌳 Binary Search Trees Project

This project, part of the curriculum from [The Odin Project](https://github.com/TheOdinProject), focuses on implementing and understanding Binary Search Trees (BST) using TypeScript. It includes creating, manipulating, and balancing binary search trees to ensure efficient data retrieval, insertion, and deletion.

## 🚀 Quickstart

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/itkrivoshei/OdinCodeProjcts.git
   ```
2. **Install dependencies** at the root of the repository:
   ```sh
   npm i
   ```
3. **Run tests** for the BinarySearchTrees project:
   ```sh
   npm test src/BinarySearchTrees/tests/balancedBST
   ```
4. **Explore the project:**
   Use [`bstDriverScript.ts`](bstDriverScript.ts) to test the BST's functionality or to simulate different scenarios and BST operations.
   ```sh
   ts-node src/BinarySearchTrees/bstDriverScript
   ```

## 🧬 Project Structure

The project comprises several TypeScript files that outline the BST's structure and functionality:

- [`TreeNode.ts`](TreeNode.ts): Defines each node in the BST.
- [`BalancedBST.ts`](BalancedBST.ts): Manages the BST, ensuring it remains balanced.
- [`prettyPrint.ts`](prettyPrint.ts): Utility for visually printing the BST.
- [`bstDriverScript.ts`](bstDriverScript.ts): Demonstrates the functionality of the BST.
- [`tests/balancedBST.test.ts`](tests/balancedBST.test.ts): Contains test cases for the `BalancedBST` class.

Below is an overview of key functions provided by the `BalancedBST` class and their descriptions:

| Function                 | Description                                                             | Accepts                                    | Returns               |
| ------------------------ | ----------------------------------------------------------------------- | ------------------------------------------ | --------------------- |
| 🌱 `insert`              | Inserts a new value into the BST, maintaining its balanced structure.   | `(value: T)`                               | `void`                |
| ❌ `delete`              | Removes a value from the BST, if it exists, and rebalances the tree.    | `(value: T)`                               | `void`                |
| 🔍 `find`                | Searches for a value in the BST and returns the corresponding node.     | `(value: T)`                               | `TreeNode<T> \| null` |
| 🔄 `levelOrderIterative` | Traverses the tree iteratively in level-order.                          | `(callback?: (node: TreeNode<T>) => void)` | `T[]`                 |
| 🔄 `levelOrderRecursive` | Traverses the tree recursively in level-order.                          | `(callback?: (node: TreeNode<T>) => void)` | `T[]`                 |
| 🔢 `inOrder`             | Traverses the tree in in-order and performs a callback on each node.    | `(callback?: (node: TreeNode<T>) => void)` | `T[]`                 |
| 🔢 `preOrder`            | Traverses the tree in pre-order and performs a callback on each node.   | `(callback?: (node: TreeNode<T>) => void)` | `T[]`                 |
| 🔢 `postOrder`           | Traverses the tree in post-order and performs a callback on each node.  | `(callback?: (node: TreeNode<T>) => void)` | `T[]`                 |
| 📏 `height`              | Calculates the height of the tree from the given node.                  | `(node: TreeNode<T> \| null)`              | `number`              |
| 📐 `depth`               | Determines the depth of the given node within the tree.                 | `(node: TreeNode<T> \| null)`              | `number`              |
| ⚖️ `isBalanced`          | Checks if the tree is balanced (difference in heights of subtrees ≤ 1). | `()`                                       | `boolean`             |
| 🔄 `rebalance`           | Rebalances the tree to ensure optimal depth for all operations.         | `()`                                       | `void`                |

## [📝 Assignment](https://www.theodinproject.com/lessons/javascript-binary-search-trees#assignment)

Each function within the BST is designed to tackle specific aspects of the assignment.

---

### ℹ️ See Main [README](../../README.md) for more info.
