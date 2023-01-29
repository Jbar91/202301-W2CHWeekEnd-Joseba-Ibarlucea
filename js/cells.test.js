import { randNum, createGrid, checkState } from './cells';

// Function randNum
describe('Given function randNum', () => {
  test('Then the return should be between 3 and 19', () => {
    const result = randNum();
    const min = 3;
    const max = 19;
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });
});

// Function createGrid
describe('Given function createGrid', () => {
  describe('When the params are cols=2 and rows=2', () => {
    test("Then the result should be an 2D array of 2x2 containing 0's and 1's", () => {
      const cols = 2;
      const rows = 2;
      const result = createGrid(cols, rows);
      try {
        expect(result[0]).toContain(0);
      } catch {
        expect(result[0]).toContain(1);
      }
    });
  });
});

// Function checkState
describe('Given function checkState', () => {
  describe('When ', () => {
    test('Then die', () => {
      const grid = [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ];
      const cols = 3;
      const rows = 3;
      const result = checkState(grid, cols, rows);
      const expected = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      expect(result).toEqual(expected);
    });
    test('Then live', () => {
      const grid = [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
      ];
      const cols = 3;
      const rows = 3;
      const result = checkState(grid, cols, rows);
      const expected = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ];
      expect(result).toEqual(expected);
    });
  });
});
