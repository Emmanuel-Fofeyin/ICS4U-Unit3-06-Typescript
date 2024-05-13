/**
* This program uses the quick sort recursive algorithm.
*
* @author  Emmanuel FN
* @version 1.0
* @since   2024-05-13
*/

import { createPrompt } from 'bun-promptx'

const MIN = 0
const MAX = 100
const ARRAY_SIZE = 100

function quickSort(array: number[]): number[] {
  if (array.length <= 1) {
    return array;
  }

  const pivotIndex = Math.floor(array.length / 2);
  const pivot = array[pivotIndex];
  const left = [];
  const right = [];

  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) {
      continue;
    }
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

let numberArray: number[] = []

for (let i = 0; i < ARRAY_SIZE; i++) {
  numberArray[i] = Math.floor(Math.random() * (MAX + 1))
}

console.log(`Before:\n${numberArray}`);
console.log(`After:\n${quickSort(numberArray)}`);

console.log(`\nDone.`);
