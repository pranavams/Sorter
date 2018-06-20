
import {Sort} from './sort';

export class InsertionSort extends Sort {

  constructor(tempArray: number[]) {
    super(tempArray);
  }

  sort(): number[] {
    let j = 0, value = 0;
    for (let i = 0; i < this.elements.length; i++) {
      value = this.elements[i];
      for (j = i - 1; j > -1 && this.elements[j] > value; j--) {
        this.elements[j + 1] = this.elements[j];
      }
      this.elements[j + 1] = value;
    }

    return this.elements;
  }
}
