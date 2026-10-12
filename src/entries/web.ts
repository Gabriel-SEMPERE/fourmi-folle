import { CELL_SIZE, GRID_HEIGHT, GRID_WIDTH, STEP_INTERVAL_MS } from "../config";
import { Ant } from "../core/ant";
import { Grid } from "../core/grid";
import { Simulation } from "../core/simulation";
import { CanvasRenderer } from "../render/canvas";

const canvas = document.querySelector<HTMLCanvasElement>("#grid");
if (!canvas) {
  throw new Error("Canvas #grid not found");
}

const grid = new Grid(GRID_WIDTH, GRID_HEIGHT);
const ant = new Ant(Math.floor(GRID_WIDTH / 2), Math.floor(GRID_HEIGHT / 2), "up");
const simulation = new Simulation(grid, ant);
const renderer = new CanvasRenderer(canvas, CELL_SIZE);

renderer.render(simulation);

setInterval(() => {
  simulation.step();
  renderer.render(simulation);
}, STEP_INTERVAL_MS);
