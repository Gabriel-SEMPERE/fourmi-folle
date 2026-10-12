import type { Ant } from "./ant";
import type { Grid } from "./grid";

export class Simulation {
  steps = 0;

  constructor(
    readonly grid: Grid,
    readonly ant: Ant,
  ) {}

  step(): void {
    const { x, y } = this.ant;
    const cell = this.grid.get(x, y);
    this.grid.set(x, y, cell === "white" ? "black" : "white");
    this.ant.moveForward(this.grid);
    this.steps++;
  }
}
