import { Sudoku } from './../src/memory.js';

describe('Sudoku', () => {

  test('should check if row array is empty', () => {
    var sudoku1 = new Sudoku()
    expect(sudoku1.row).toEqual()
  });

//   test('Should check .addToRows number is pushed to rows array', () => {
//     var sudoku1 = new Sudoku()
//     expect(sudoku1.row.addToRows()).toEqual(5);
//   });
// });