export function Sudoku() {
  this.row = [];
  // this.column = [];
}

Sudoku.prototype.addToRows = function(row) {
  this.row.push(row)
}

Sudoku.prototype.checkNumber = function() {
    for( var i = 0; i < this.row.length; i++){
      if(this.row[i] <= 9 && this.row[i]> 0) {
      return true
    }
  }
}
// Sudoku.prototype.checkRows = function() {
//   for(var i = 0; i < row.length; i++) {
//     if (this.row[i] == )
//   }
// }


