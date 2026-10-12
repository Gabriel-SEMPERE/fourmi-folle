import type { Ant } from "./ant";
import type { Grid } from "./grid";

export class Simulation {
  steps = 0;

  constructor(
    readonly grid: Grid,
    readonly ant: Ant,
  ) {}

  get isOver(): boolean {
    return !this.grid.contains(this.ant.x, this.ant.y);
  }

  step(): void {
    if (this.isOver) {
      return;
    }

    const { x, y } = this.ant;

    if (this.grid.get(x, y) === "white") {
      this.ant.turnRight();
      this.grid.set(x, y, "black");
    } else {
      this.ant.turnLeft();
      this.grid.set(x, y, "white");
    }

    this.ant.moveForward();
    this.steps++;
  }
}
