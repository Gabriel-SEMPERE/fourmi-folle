export type Cell = "white" | "black";

export class Grid {
  private readonly cells: Cell[];

  constructor(
    readonly width: number,
    readonly height: number,
  ) {
    this.cells = new Array<Cell>(width * height).fill("white");
  }

  contains(x: number, y: number): boolean {
    return x >= 0 && x < this.width && y >= 0 && y < this.height;
  }

  get(x: number, y: number): Cell {
    return this.cells[this.index(x, y)];
  }

  set(x: number, y: number, cell: Cell): void {
    this.cells[this.index(x, y)] = cell;
  }

  private index(x: number, y: number): number {
    if (!this.contains(x, y)) {
      throw new RangeError(`Cell (${x}, ${y}) is outside the grid`);
    }
    return y * this.width + x;
  }
}
