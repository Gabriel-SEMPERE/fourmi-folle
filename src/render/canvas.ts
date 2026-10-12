import type { Grid } from "../core/grid";
import type { Renderer } from "./renderer";
import { CELL_COLORS, GRID_LINE_COLOR } from "./palette";

export class CanvasRenderer implements Renderer {
  private readonly context: CanvasRenderingContext2D;

  constructor(
    private readonly canvas: HTMLCanvasElement,
    private readonly cellSize: number,
  ) {
    const context = canvas.getContext("2d");
    if (!context) {
      throw new Error("Canvas 2D context is not supported");
    }
    this.context = context;
  }

  render(grid: Grid): void {
    this.canvas.width = grid.width * this.cellSize;
    this.canvas.height = grid.height * this.cellSize;

    for (let y = 0; y < grid.height; y++) {
      for (let x = 0; x < grid.width; x++) {
        this.context.fillStyle = CELL_COLORS[grid.get(x, y)];
        this.context.fillRect(x * this.cellSize, y * this.cellSize, this.cellSize, this.cellSize);
      }
    }

    this.drawGridLines(grid);
  }

  private drawGridLines(grid: Grid): void {
    this.context.strokeStyle = GRID_LINE_COLOR;
    this.context.lineWidth = 1;
    this.context.beginPath();

    for (let x = 0; x <= grid.width; x++) {
      const px = x * this.cellSize + 0.5;
      this.context.moveTo(px, 0);
      this.context.lineTo(px, this.canvas.height);
    }

    for (let y = 0; y <= grid.height; y++) {
      const py = y * this.cellSize + 0.5;
      this.context.moveTo(0, py);
      this.context.lineTo(this.canvas.width, py);
    }

    this.context.stroke();
  }
}
