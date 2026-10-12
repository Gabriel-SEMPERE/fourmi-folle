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

  wrapX(x: number): number {
    return ((x % this.width) + this.width) % this.width;
  }

  wrapY(y: number): number {
    return ((y % this.height) + this.height) % this.height;
  }

  private index(x: number, y: number): number {
    return this.wrapY(y) * this.width + this.wrapX(x);
  }
}
