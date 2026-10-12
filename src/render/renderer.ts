import type { Grid } from "../core/grid";

export interface Renderer {
  render(grid: Grid): void;
}
