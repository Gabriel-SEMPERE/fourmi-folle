export type Direction = "up" | "right" | "down" | "left";

const CLOCKWISE: Direction[] = ["up", "right", "down", "left"];

export const DIRECTION_VECTORS: Record<Direction, { dx: number; dy: number }> = {
  up: { dx: 0, dy: -1 },
  right: { dx: 1, dy: 0 },
  down: { dx: 0, dy: 1 },
  left: { dx: -1, dy: 0 },
};

export function turnRight(direction: Direction): Direction {
  return CLOCKWISE[(CLOCKWISE.indexOf(direction) + 1) % CLOCKWISE.length];
}

export function turnLeft(direction: Direction): Direction {
  return CLOCKWISE[(CLOCKWISE.indexOf(direction) + CLOCKWISE.length - 1) % CLOCKWISE.length];
}
