# Fourmis Folle

Langton's ant in TypeScript, displayed in the browser.

## About the project

An ant lives on a grid of cells that are all white at the start. On every step, it looks at the color of the cell it stands on:

| Cell color | Turn | New cell color | Then |
| --- | --- | --- | --- |
| White | Quarter turn **right** | Black | Moves forward one cell |
| Black | Quarter turn **left** | White | Moves forward one cell |

With only these two rules, a single ant goes through two phases:

1. **Chaos**: for about 10,000 steps, it draws a pattern that looks random.
2. **Highway**: then it suddenly starts repeating the same 104-step pattern forever, building a diagonal "highway" that leaves the area.

The ant is fully deterministic: on an empty grid, it always draws the same picture.

### Several ants

All ants share the same grid and follow the same two rules. On each step, every ant still on the grid moves once.

- An ant only cares about the color of its cell, not about who painted it. When it walks on a cell painted by another ant, it reacts to that color, so the ants keep changing each other's path.
- Two ants can stand on the same cell at the same time.
- Because of these interactions, every run is different. Some ants leave the grid quickly, while others can end up looping together forever.

### Grid edges

The grid does not wrap around. When an ant walks off the edge, it leaves the simulation. The simulation stops when no ant is left on the grid.

## Features

- Black and white grid drawn on a canvas, with each ant shown in its own color
- Several ants (3 by default), each starting on a random cell inside a square at the center of the grid
- **Add ant** button to drop a new ant while the simulation is running, paused or finished
- **Pause / Resume** button
- Global step counter
- **Save as PDF** button to download the current drawing

## Getting started

Requirements: [Node.js](https://nodejs.org/) 18 or later.

```bash
git clone https://github.com/Gabriel-SEMPERE/fourmi-folle.git
cd fourmi-folle
npm install
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

Other commands:

```bash
npm run build      # type-check and build into dist/
npm run typecheck  # type-check only
```

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

With the default settings, a single ant starting in the central square always reaches at least 15,000 steps before leaving the grid.

## Author

Gabriel Sempere — [La Plateforme](https://laplateforme.io/)
