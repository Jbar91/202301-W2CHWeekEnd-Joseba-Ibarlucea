export const add = (a, b) => a + b;

// Creates a random number with a min of 4 and a max of 9
const randNum = () => Math.floor(Math.random() * (10 - 4) + 4);

// Assign random value to columns and rows
const rows = randNum();
const cols = rows;
let interval = 0;
const createGrid = (cols, rows) => {
  // Create array with new array for the columns
  const arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    // Create second inner array for the rows
    arr[i] = new Array(rows);
  }

  return arr;
};

const grid = createGrid(cols, rows);
// Populate the grid by using the rows and cols and then assign a value to the cell
// with a random number between 0 and 1

const populate = () => {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = Math.round(Math.random());
    }
  }

  return grid;
};

const start = setInterval(() => {
  const nextGen = grid;
  console.log("^^^^^^^^^^^^");
  populate().forEach((item) => console.log(item.join(" ")));
  console.log("--------");

  const neighborsState = (grid, x, y) => {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        const row = (y + j + rows) % rows;
        const col = (x + i + cols) % cols;
        sum += grid[row][col];
      }
    }

    sum -= grid[x][y];

    return sum;
  };

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const state = grid[i][j];
      const neighbors = neighborsState(grid, i, j);

      if (state === 0 && neighbors === 3) {
        nextGen[i][j] = 1;
      }

      if ((state === 1 && neighbors < 2) || neighbors > 3) {
        nextGen[i][j] = 0;
      }

      if (state === 1 && (neighbors === 2 || neighbors === 3)) {
        nextGen[i][j] = 1;
      }
    }
  }

  nextGen.forEach((item) => console.log(item.join(" ")));
  interval++;
  if (interval === 5) {
    console.log(interval);
    clearInterval(start);
  }
}, 1500);
