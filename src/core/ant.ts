import { DIRECTION_VECTORS, turnLeft, turnRight, type Direction } from "./direction";

export class Ant {
  constructor(
    public x: number,
    public y: number,
    public direction: Direction = "up",
  ) {}

  turnRight(): void {
    this.direction = turnRight(this.direction);
  }

  turnLeft(): void {
    this.direction = turnLeft(this.direction);
  }

  moveForward(): void {
    const { dx, dy } = DIRECTION_VECTORS[this.direction];
    this.x += dx;
    this.y += dy;
  }
}
