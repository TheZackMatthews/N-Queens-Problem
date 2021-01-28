'use strict';


function calc (size) {
  let solutions = 0;
  let board = new Array(size).fill(0);
  placeRook(board, size);

  function placeRook (row, rooks) { 
    for (let column = 0; column < size; column++) {
      // Open one new recursive call for each available 0
      if (row[column] === 0) {
        row[column] = 1;
        rooks--;
        // If we just placed our last rook, count it as a solution and stop
        if (rooks === 0) {
          solutions++;
        } else {
          placeRook(row, rooks);
        }
        row[column] = 0;
        rooks++;
      }
    }
  }
  return solutions;
}
module.exports = calc;

