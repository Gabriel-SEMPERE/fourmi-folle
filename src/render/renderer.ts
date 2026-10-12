import type { Simulation } from "../core/simulation";

export interface Renderer {
  render(simulation: Simulation): void;
}
