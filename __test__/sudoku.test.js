import { Sudoku } from './../src/memory.js';

describe('Sudoku', () => {

  test('should check if row array is empty', () => {
    var sudoku1 = new Sudoku()
    expect(sudoku1.row).toEqual([])
  });

  test('Should check .addToRows number is pushed to rows array', () => {
    var sudoku1 = new Sudoku()
    sudoku1.addToRows()
    expect(sudoku1.row).toEqual([5]);
    console.log(sudoku1)
  });
});