export function Sudoku() {
  this.row = [];
  // this.column = [];
}

Sudoku.prototype.addToRows = function(row) {
  this.row.push(row)
}

Sudoku.prototype.checkNumber = function(row) {
   
      if(row <= 9 && row> 0) {
      this.row.push(row);
      return true
    } else {
      this.row.push("false");
  
    }
}

// Sudoku.prototype.checkRows = function() {
//   for(var i = 0; i < row.length; i++) {
//     if (this.row[i] == )
//   }
// }


