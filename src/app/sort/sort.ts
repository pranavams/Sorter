export class Sort {
  protected elements: number[];

  constructor(tempArray: number[]) {
    this.elements = tempArray;
  }

  public getTimeTaken(): number {
    const startTime = new Date().getMilliseconds();
    this.sort();
    const timeTaken = (new Date().getMilliseconds() - startTime);
    return timeTaken >= 0 ? timeTaken : this.getTimeTaken();
  }

  public sort(): number[] {
    return null;
  }
}