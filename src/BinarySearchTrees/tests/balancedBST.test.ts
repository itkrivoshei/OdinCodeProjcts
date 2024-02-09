import { BalancedBST } from '../BalancedBST';

describe('BalancedBST Tests', () => {
  let bst: BalancedBST<number>;

  beforeEach(() => {
    bst = new BalancedBST([]);
  });

  test('Constructs a balanced BST from an array', () => {
    bst = new BalancedBST([3, 1, 4]);
    expect(bst.testRoot?.value).toBe(3);
    expect(bst.testRoot?.left?.value).toBe(1);
    expect(bst.testRoot?.right?.value).toBe(4);
  });

  test('Inserts values correctly', () => {
    bst.insert(2);
    expect(bst.testRoot?.value).toBe(2);
    bst.insert(1);
    bst.insert(3);
    expect(bst.testRoot?.left?.value).toBe(1);
    expect(bst.testRoot?.right?.value).toBe(3);
  });

  describe('Deletion Operations', () => {
    beforeEach(() => {
      bst = new BalancedBST([2, 1, 3]);
    });

    test('Removes a leaf node correctly', () => {
      bst.delete(3);
      expect(bst.testRoot?.right).toBeNull();
    });

    test('Removes a node with one child correctly', () => {
      bst.delete(1);
      expect(bst.testRoot?.left).toBeNull();
    });

    test('Replaces a node with two children correctly', () => {
      bst = new BalancedBST([2, 1, 3, 4]);
      bst.delete(3);
      expect(bst.testRoot?.right?.value).toBe(4);
    });

    test('Removes the root node correctly', () => {
      bst.delete(2);
      expect(bst.testRoot?.value).not.toBe(2);
    });
  });

  describe('Traversal Operations', () => {
    beforeEach(() => {
      bst = new BalancedBST([3, 1, 4, 2]);
    });

    test('Performs iterative level-order traversal correctly', () => {
      expect(bst.levelOrderIterative()).toEqual([2, 1, 3, 4]);
    });

    test('Performs recursive level-order traversal correctly', () => {
      expect(bst.levelOrderRecursive()).toEqual([2, 1, 3, 4]);
    });

    test('Performs in-order traversal correctly', () => {
      expect(bst.inOrder()).toEqual([1, 2, 3, 4]);
    });

    test('Performs pre-order traversal correctly', () => {
      expect(bst.preOrder()).toEqual([2, 1, 3, 4]);
    });

    test('Performs post-order traversal correctly', () => {
      expect(bst.postOrder()).toEqual([1, 4, 3, 2]);
    });
  });

  describe('Height and Depth Calculations', () => {
    beforeEach(() => {
      bst = new BalancedBST([1, 2, 3, 4]);
    });

    test('Calculates height correctly', () => {
      const rootNode = bst.find(2);
      expect(bst.height(rootNode)).toBe(2);
    });

    test('Calculates depth correctly', () => {
      const leafNode = bst.find(4);
      expect(bst.depth(leafNode)).toBe(2);
    });
  });

  describe('Balance Checks and Rebalancing', () => {
    beforeEach(() => {
      bst = new BalancedBST([3, 1, 4, 2]);
    });

    test('Checks if the tree is balanced', () => {
      expect(bst.isBalanced()).toBe(true);
    });

    test('Rebalances the tree after insertions', () => {
      bst.insert(5);
      bst.insert(6);
      bst.insert(7);
      expect(bst.isBalanced()).toBe(false);
      bst.rebalance();
      expect(bst.isBalanced()).toBe(true);
      expect(bst.inOrder()).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
  });
});
