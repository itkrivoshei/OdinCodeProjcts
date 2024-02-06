class TreeNode<T> {
  public left: TreeNode<T> | null = null;
  public right: TreeNode<T> | null = null;

  constructor(public value: T) {}
}

export class BalancedBST<T extends number> {
  private root: TreeNode<T> | null = null;

  public get testRoot(): TreeNode<T> | null {
    return this.root;
  }

  constructor(array: T[]) {
    this.buildTree(array);
  }

  private buildTree(array: T[]): void {
    const sortedArray = Array.from(new Set(array)).sort((a, b) => a - b);

    this.root = this.buildTreeHelper(sortedArray, 0, sortedArray.length - 1);
  }

  private buildTreeHelper(
    array: T[],
    start: number,
    end: number
  ): TreeNode<T> | null {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const node = new TreeNode<T>(array[mid]);

    node.left = this.buildTreeHelper(array, start, mid - 1);
    node.right = this.buildTreeHelper(array, mid + 1, end);

    return node;
  }

  public insert(value: T): void {
    this.root = this.insertRecursive(this.root, value);
  }

  private insertRecursive(node: TreeNode<T> | null, value: T): TreeNode<T> {
    if (node === null) return new TreeNode(value);

    if (value < node.value) node.left = this.insertRecursive(node.left, value);
    else if (value > node.value)
      node.right = this.insertRecursive(node.right, value);

    return node;
  }

  public delete(value: T): void {
    this.root = this.deleteRecursive(this.root, value);
  }

  private deleteRecursive(
    node: TreeNode<T> | null,
    value: T
  ): TreeNode<T> | null {
    if (node === null) return null;

    if (value < node.value) node.left = this.deleteRecursive(node.left, value);
    else if (value > node.value)
      node.right = this.deleteRecursive(node.right, value);
    else {
      if (node.left === null) return node.right;
      else if (node.right === null) return node.left;

      node.value = this.findMin(node.right).value;

      node.right = this.deleteRecursive(node.right, node.value);
    }

    return node;
  }

  private findMin(node: TreeNode<T>): TreeNode<T> {
    let current = node;

    while (current.left !== null) current = current.left;

    return current;
  }
}

const prettyPrint = <T>(
  node: TreeNode<T> | null,
  prefix = '',
  isLeft = true
) => {
  if (node === null) return;

  if (node.right !== null)
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);

  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);

  if (node.left !== null)
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
};
