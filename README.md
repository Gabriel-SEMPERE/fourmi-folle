# Fourmis Folle

Langton's ant in TypeScript, displayed in the browser.

## About the project

An ant lives on a grid of cells that are all white at the start. On every step, it looks at the color of the cell it stands on:

| Cell color | Turn | New cell color | Then |
| --- | --- | --- | --- |
| White | Quarter turn **right** | Black | Moves forward one cell |
| Black | Quarter turn **left** | White | Moves forward one cell |

With only these two rules, a single ant goes through two phases:

1. **Chaotic randomness**: for about 10,000 steps, it traces a pattern that appears random.
2. **Loop**: then, it suddenly begins to repeat the same 104-step pattern indefinitely, building a diagonal "highway" that extends beyond the area.


### Several ants

All ants share the same grid and follow the same two rules. On each step, every ant still on the grid moves once.

- An ant only cares about the color of its cell.
- Two ants can stand on the same cell at the same time.

### Grid edges

The grid does not have a cyclic edge effect. When an ant leaves the grid, it disappears.

## Features

- Black and white grid drawn on a canvas, with each ant shown in its own color
- Several ants (3 by default), each starting on a random cell inside a square at the center of the grid
- **Add ant** button to drop a new ant while the simulation is running, paused or finished
- **Pause / Resume** button
- **Global step counter**
- **Save as PDF** button to download the current drawing

## Getting started

Requirements: [Node.js](https://nodejs.org/) 18 or later.

```bash
git clone https://github.com/Gabriel-SEMPERE/fourmi-folle
cd fourmi-folle
npm install
npm run dev
```

Then open the URL shown in the terminal http://localhost:5173.


### Settings

Settings are in `src/config.ts`:

| Setting | Default | Description |
| --- | --- | --- |
| `GRID_WIDTH` / `GRID_HEIGHT` | `250` | Grid size in cells |
| `CELL_SIZE` | `4` | Cell size in pixels |
| `ANT_COUNT` | `3` | Number of ants at start |
| `START_AREA_SIZE` | `20` | Size of the central square where ants start |
| `STEPS_PER_TICK` | `10` | Steps computed per animation tick |
| `STEP_INTERVAL_MS` | `20` | Delay between two ticks, in milliseconds |



## Author

[Gabriel](https://github.com/Gabriel-SEMPERE/).
