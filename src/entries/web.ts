import {
  ANT_COUNT,
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
import { saveCanvasAsPdf } from "../render/pdf";

function getElement<T extends HTMLElement>(selector: string): T {
  const element = document.querySelector<T>(selector);
  if (!element) {
    throw new Error(`Element ${selector} not found`);
  }
  return element;
}

const canvas = getElement<HTMLCanvasElement>("#grid");
const pauseButton = getElement<HTMLButtonElement>("#pause");
const addAntButton = getElement<HTMLButtonElement>("#add-ant");
const savePdfButton = getElement<HTMLButtonElement>("#save-pdf");
const stepsCounter = getElement<HTMLElement>("#steps");

const randomInCenteredArea = (size: number): number =>
  Math.floor((size - START_AREA_SIZE) / 2) + Math.floor(Math.random() * START_AREA_SIZE);

const createAnt = (): Ant =>
  new Ant(randomInCenteredArea(GRID_WIDTH), randomInCenteredArea(GRID_HEIGHT), "up");

const grid = new Grid(GRID_WIDTH, GRID_HEIGHT);
const simulation = new Simulation(grid, Array.from({ length: ANT_COUNT }, createAnt));
const renderer = new CanvasRenderer(canvas, CELL_SIZE);

let paused = false;

function updatePauseButton(): void {
  pauseButton.disabled = simulation.isOver;
  if (simulation.isOver) {
    pauseButton.textContent = "Finished";
  } else {
    pauseButton.textContent = paused ? "Resume" : "Pause";
  }
}

function draw(): void {
  renderer.render(simulation);
  stepsCounter.textContent = simulation.steps.toLocaleString("en-US");
  updatePauseButton();
}

pauseButton.addEventListener("click", () => {
  paused = !paused;
  updatePauseButton();
});

addAntButton.addEventListener("click", () => {
  simulation.addAnt(createAnt());
  draw();
});

savePdfButton.addEventListener("click", () => {
  saveCanvasAsPdf(canvas, `langtons-ant-${simulation.steps}-steps.pdf`);
});

draw();

setInterval(() => {
  if (paused || simulation.isOver) {
    return;
  }

  for (let i = 0; i < STEPS_PER_TICK; i++) {
    simulation.step();
  }
  draw();
}, STEP_INTERVAL_MS);
