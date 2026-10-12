import { CELL_SIZE, GRID_HEIGHT, GRID_WIDTH } from "../config";
import { Grid } from "../core/grid";
import { CanvasRenderer } from "../render/canvas";

const canvas = document.querySelector<HTMLCanvasElement>("#grid");
if (!canvas) {
throw new Error("Canvas #grid not found");
}

const grid = new Grid(GRID_WIDTH, GRID_HEIGHT);
const renderer = new CanvasRenderer(canvas, CELL_SIZE);

renderer.render(grid);
