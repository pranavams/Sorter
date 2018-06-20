
import {Sort} from './sort';

export class DefaultSort extends Sort {

  constructor(tempArray: number[]) {
    super(tempArray);
  }

  sort(): number[] {
    return this.elements.sort();
  }
}
