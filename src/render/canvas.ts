import type { Ant } from "../core/ant";
import type { Grid } from "../core/grid";
import type { Simulation } from "../core/simulation";
import { ANT_COLORS, CELL_COLORS, GRID_LINE_COLOR } from "./palette";

export class CanvasRenderer {
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

  render(simulation: Simulation): void {
    const { grid, ants } = simulation;
    this.resize(grid);
    this.drawCells(grid);
    this.drawGridLines(grid);
    ants.forEach((ant, index) => {
      if (grid.contains(ant.x, ant.y)) {
        this.drawAnt(ant, ANT_COLORS[index % ANT_COLORS.length]);
      }
    });
  }

  private resize(grid: Grid): void {
    const width = grid.width * this.cellSize;
    const height = grid.height * this.cellSize;
    if (this.canvas.width !== width || this.canvas.height !== height) {
      this.canvas.width = width;
      this.canvas.height = height;
    }
  }

  private drawCells(grid: Grid): void {
    for (let y = 0; y < grid.height; y++) {
      for (let x = 0; x < grid.width; x++) {
        this.context.fillStyle = CELL_COLORS[grid.get(x, y)];
        this.context.fillRect(x * this.cellSize, y * this.cellSize, this.cellSize, this.cellSize);
      }
    }
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

  private drawAnt(ant: Ant, color: string): void {
    this.context.fillStyle = color;
    this.context.fillRect(ant.x * this.cellSize, ant.y * this.cellSize, this.cellSize, this.cellSize);
  }
}
