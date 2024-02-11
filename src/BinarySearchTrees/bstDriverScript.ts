import { BalancedBST } from './BalancedBST';
import { prettyPrint } from './prettyPrint';

function generateRandomArray(size: number, max: number): number[] {
  const arr = new Array(size);

  for (let i = 0; i < size; i++) arr[i] = Math.floor(Math.random() * max);

  return arr;
}

function printTreeOrders<T extends number>(bst: BalancedBST<T>): void {
  console.log('Level order:', bst.levelOrder());
  console.log('In-order:', bst.inOrder());
  console.log('Pre-order:', bst.preOrder());
  console.log('Post-order:', bst.postOrder());
}

function main(): void {
  const randomNumbers = generateRandomArray(10, 100);
  const bst = new BalancedBST(randomNumbers);

  console.log('Is balanced:', bst.isBalanced());

  console.log('Initial tree structure:');
  prettyPrint(bst.testRoot);

  printTreeOrders(bst);

  bst.insert(101);
  bst.insert(102);
  bst.insert(103);
  bst.insert(104);

  console.log('Is balanced after adding elements:', bst.isBalanced());

  bst.rebalance();

  console.log('Is balanced after rebalancing:', bst.isBalanced());

  printTreeOrders(bst);

  console.log('Tree structure after rebalancing:');
  prettyPrint(bst.testRoot);
}

main();
