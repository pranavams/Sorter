/**
 */

export class BubbleSort {

  constructor() {}

  sort(tempArray: number[]) {
    for (let i = 0; i < tempArray.length; i++) {
      for (let j = i + 1; j < tempArray.length; j++) {
        if (tempArray[i] > tempArray[j]) {
          const temp = tempArray[i];
          tempArray[i] = tempArray[j];
          tempArray[j] = temp;
        }
      }
    }
    return tempArray;
  }
}
