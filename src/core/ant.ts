import { DIRECTION_VECTORS, type Direction } from "./direction";
import type { Grid } from "./grid";

export class Ant {
  constructor(
    public x: number,
    public y: number,
    public direction: Direction = "up",
  ) {}

  moveForward(grid: Grid): void {
    const { dx, dy } = DIRECTION_VECTORS[this.direction];
    this.x = grid.wrapX(this.x + dx);
    this.y = grid.wrapY(this.y + dy);
  }
}
