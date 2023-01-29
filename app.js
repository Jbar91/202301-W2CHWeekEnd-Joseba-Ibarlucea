import { randNum, createGrid, checkState } from './js/cells.js';

const cols = randNum();
const rows = cols;

const grid = createGrid(cols, rows);
grid.forEach((cell) => console.log(cell.join(' ')));
console.log('--');
checkState(grid, cols, rows).forEach((cell) => console.log(cell.join(' ')));
