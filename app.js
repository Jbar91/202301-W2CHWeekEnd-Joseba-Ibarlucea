import { randNum, createGrid, populate } from './js/cells.js';

const cols = randNum();
const rows = cols;

console.log(cols, rows);

const grid = createGrid(cols, rows);

populate(grid);

const nextGen = [...grid];
grid.forEach((item) => console.log(item.join(' ')));
