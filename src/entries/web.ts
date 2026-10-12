import {
  CELL_SIZE,
  GRID_HEIGHT,
  GRID_WIDTH,
  START_AREA_SIZE,
  STEP_INTERVAL_MS,
  STEPS_PER_TICK,
} from "../config";
import { Ant } from "../core/ant";
import { Grid } from "../core/grid";
import { Simulation } from "../core/simulation";
import { CanvasRenderer } from "../render/canvas";

const canvas = document.querySelector<HTMLCanvasElement>("#grid");
if (!canvas) {
  throw new Error("Canvas #grid not found");
}

const grid = new Grid(GRID_WIDTH, GRID_HEIGHT);
const randomInCenteredArea = (size: number): number =>
  Math.floor((size - START_AREA_SIZE) / 2) + Math.floor(Math.random() * START_AREA_SIZE);
const ant = new Ant(randomInCenteredArea(GRID_WIDTH), randomInCenteredArea(GRID_HEIGHT), "up");
const simulation = new Simulation(grid, ant);
const renderer = new CanvasRenderer(canvas, CELL_SIZE);

renderer.render(simulation);

const timer = setInterval(() => {
  for (let i = 0; i < STEPS_PER_TICK; i++) {
    simulation.step();
  }
  renderer.render(simulation);

  if (simulation.isOver) {
    clearInterval(timer);
  }
}, STEP_INTERVAL_MS);
