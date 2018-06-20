
import {Sort} from './sort';

export class MergeSort extends Sort {

  constructor(elements: number[]) {
    super(elements);
  }


  // compare the this.elementsays item by item and return the concatenated result
  merge(left, right) {
    const result = [];
    let indexLeft = 0;
    let indexRight = 0;

    while (indexLeft < left.length && indexRight < right.length) {
      if (left[indexLeft] < right[indexRight]) {
        result.push(left[indexLeft]);
        indexLeft++;
      } else {
        result.push(right[indexRight]);
        indexRight++;
      }
    }

    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
  }

  mergeSort(arr: number[]): number[] {
    if (arr.length === 1) {
      // return once we hit an this.elementsay with a single item
      return arr;
    }

    const middle = Math.floor(arr.length / 2); // get the middle item of the this.elementsay rounded down
    const left = arr.slice(0, middle); // items; on the left side
    const right = arr.slice(middle); // items on the right side

    return this.merge(
      this.mergeSort(left),
      this.mergeSort(right)
    );
  }

  sort(): number[] {
    return this.mergeSort(this.elements);
  }
}
