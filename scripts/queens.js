'use strict';

function calc (size) {
  if (size === 0) return 0;
  let solutions = 0;
  let board = new Array(size).fill(0);
  let diag = new Array(size*2-1).fill(0);
  let antiDiag = diag.slice();
  placeQueen(board, diag, antiDiag, 0);

  function findDiagonal (x, y) {
    let diagonal = -(x-y-(size-1)); //different ways to express based upon readability
    let antiDiagonal = x+y;
    return [diagonal, antiDiagonal];
  }
  // Make two arrays with (2*size)-1 elements, which update whenever we add or remove a queen
  // We can update these by invoking findDiagonal

  function placeQueen (row, diagonal, antiDiagonal, queens) { //Rooks can represent which row we're in
    for (let column = 0; column < size; column++) {
      let [diagIndex, antiIndex] = findDiagonal(column, queens);
      
      // Open one new recursive call for each available 0
      if (row[column] === 0 && diagonal[diagIndex] === 0 && antiDiagonal[antiIndex] === 0) {
        row[column] = 1;
        diagonal[diagIndex] = 1;
        antiDiagonal[antiIndex] = 1;
        queens++;
        //let [diagonal, antiDiagonal] = findDiagonal(i, queens);

        // If we just placed our last rook, count it as a solution and stop
        if (queens === row.length) {
          solutions++;
        } else {
          placeQueen(row, diagonal, antiDiagonal, queens);
        }
        row[column] = 0;
        diagonal[diagIndex] = 0;
        antiDiagonal[antiIndex] = 0;
        queens--;
      }
    }
  }
  return solutions;
}

module.exports = calc;


