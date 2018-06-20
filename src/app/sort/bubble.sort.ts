/**
 */
import {Sort} from './sort';

export class BubbleSort extends Sort {

  constructor(elements: number[]) {
    super(elements);
  }

  sort(): number[] {
    for (let i = 0; i < this.elements.length; i++) {
      for (let j = i + 1; j < this.elements.length; j++) {
        if (this.elements[i] > this.elements[j]) {
          const temp = this.elements[i];
          this.elements[i] = this.elements[j];
          this.elements[j] = temp;
        }
      }
    }
    return this.elements;
  }
}
