import { BalancedBST } from '../balancedBST';

describe('BalancedBST', () => {
  let bst: BalancedBST<number>;

  beforeEach(() => {
    bst = new BalancedBST([]);
  });

  test('builds a balanced BST', () => {
    bst = new BalancedBST([3, 1, 4]);

    expect(bst.testRoot?.value).toBe(3);
    expect(bst.testRoot?.left?.value).toBe(1);
    expect(bst.testRoot?.right?.value).toBe(4);
  });

  test('inserts a value', () => {
    bst.insert(2);

    expect(bst.testRoot?.value).toBe(2);

    bst.insert(1);
    bst.insert(3);

    expect(bst.testRoot?.left?.value).toBe(1);
    expect(bst.testRoot?.right?.value).toBe(3);
  });

  test('deletes a leaf node', () => {
    bst = new BalancedBST([2, 1, 3]);

    bst.delete(3);

    expect(bst.testRoot?.right).toBeNull();
  });

  test('deletes a node with one child', () => {
    bst = new BalancedBST([2, 1, 3]);

    bst.delete(1);

    expect(bst.testRoot?.left).toBeNull();
  });

  test('deletes a node with two children', () => {
    bst = new BalancedBST([2, 1, 3, 4]);

    bst.delete(3);

    expect(bst.testRoot?.right?.value).toBe(4);
  });

  test('deletes the root node', () => {
    bst = new BalancedBST([2, 1, 3]);

    bst.delete(2);

    expect(bst.testRoot?.value).not.toBe(2);
  });
});
