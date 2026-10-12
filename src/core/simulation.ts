import type { Ant } from "./ant";
import type { Grid } from "./grid";

export class Simulation {
  steps = 0;

  constructor(
    readonly grid: Grid,
    readonly ants: Ant[],
  ) {}

  addAnt(ant: Ant): void {
    this.ants.push(ant);
  }

  get activeAnts(): Ant[] {
    return this.ants.filter((ant) => this.grid.contains(ant.x, ant.y));
  }

  get isOver(): boolean {
    return this.activeAnts.length === 0;
  }

  step(): void {
    const ants = this.activeAnts;
    if (ants.length === 0) {
      return;
    }

    for (const ant of ants) {
      this.moveAnt(ant);
    }
    this.steps++;
  }

  private moveAnt(ant: Ant): void {
    const { x, y } = ant;

    if (this.grid.get(x, y) === "white") {
      ant.turnRight();
      this.grid.set(x, y, "black");
    } else {
      ant.turnLeft();
      this.grid.set(x, y, "white");
    }

    ant.moveForward();
  }
}
