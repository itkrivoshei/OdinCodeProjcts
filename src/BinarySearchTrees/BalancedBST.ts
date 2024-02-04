class TreeNode<T> {
  public left: TreeNode<T> | null = null;
  public right: TreeNode<T> | null = null;

  constructor(public value: T) {}
}

class BalancedBST<T> {
  private root: TreeNode<T> | null = null;

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
}

const prettyPrint = <T>(
  node: TreeNode<T> | null,
  prefix = '',
  isLeft = true
) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};
