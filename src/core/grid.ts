export type Cell = "white" | "black";

export class Grid {
  private readonly cells: Cell[];

  constructor(
    readonly width: number,
    readonly height: number,
  ) {
    this.cells = new Array<Cell>(width * height).fill("white");
  }

  get(x: number, y: number): Cell {
    return this.cells[this.index(x, y)];
  }

  set(x: number, y: number, cell: Cell): void {
    this.cells[this.index(x, y)] = cell;
  }

  private index(x: number, y: number): number {
    const wrappedX = ((x % this.width) + this.width) % this.width;
    const wrappedY = ((y % this.height) + this.height) % this.height;
    return wrappedY * this.width + wrappedX;
  }
}
