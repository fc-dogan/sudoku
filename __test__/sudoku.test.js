import { Sudoku } from './../src/memory.js';

describe('Sudoku', () => {

  test('should check if row array is empty', () => {
    var sudoku1 = new Sudoku()
    expect(sudoku1.row).toEqual([])
  });

  test('Should check .addToRows number is pushed to rows array', () => {
    var sudoku1 = new Sudoku()
    sudoku1.addToRows(5)
    expect(sudoku1.row).toEqual([5]);
    console.log(sudoku1)
  });

  test('Should check if number is between 0 and 10', () => {
    var sudoku1 = new Sudoku()
    sudoku1.checkNumber(12)
    expect(sudoku1.row).toEqual("false");
    console.log(sudoku1)
  });


});