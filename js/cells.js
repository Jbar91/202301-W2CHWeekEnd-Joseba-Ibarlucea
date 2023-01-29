// Creates a random number with a min of 3 and a max of 9
export const randNum = () => Math.floor(Math.random() * (20 - 3) + 3);

export const createGrid = (cols, rows) => {
  // Create array with new array for the columns
  const grid = new Array(cols);
  for (let i = 0; i < grid.length; i++) {
    // Create second inner array for the rows
    grid[i] = new Array(rows);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j] = Math.round(Math.random());
    }
  }

  return grid;
};

// Instantiation of the populate func to be used in the loop
export const neighborsState = (grid, y, x) => {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      const col = (y + i + grid.length) % grid.length;
      const row = (x + j + grid.length) % grid.length;
      sum += grid[col][row];
    }
  }

  sum -= grid[y][x];

  return sum;
};

export const checkState = (grid, cols, rows) => {
  let nextGen = createGrid(cols, rows);
  [grid, nextGen] = [
    (grid = JSON.stringify(grid)),
    (nextGen = JSON.parse(grid)),
  ];
  grid = JSON.parse(grid);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const state = grid[i][j];
      const neighbors = neighborsState(grid, i, j);
      // If cell is dead and count of neighbors is equal to 3, lives again
      if (state === 0 && neighbors === 3) {
        nextGen[i][j] = 1;
      }

      // If cell is alive and count of neighbors is less than 2 or greater than 3, dies
      if (state === 1 && (neighbors < 2 || neighbors > 3)) {
        nextGen[i][j] = 0;
      }

      // If cell is alive and count of neighbors is exactly 2 or 3, stays alive
      if (state === 1 && (neighbors === 2 || neighbors === 3)) {
        nextGen[i][j] = 1;
      }
    }
  }

  // Equals grid to changed after checking neighbors
  grid = nextGen;
  return grid;
};
