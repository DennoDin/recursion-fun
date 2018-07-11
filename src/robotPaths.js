class Board {
  constructor(size) {
    this.board = [];
    for (let row = 0; row < size; row += 1) {
      this.board.push([]);
      for (let col = 0; col < size; col += 1) {
        this.board[row].push(false);
      }
    }
  }

  togglePiece(row, col) {
    this.board[row][col] = !this.board[row][col];
    return this.board;
  }
  hasBeenVisited(row, col) {
    return this.board[row][col];
  }
}

class RobotPaths {
  // initialize all your options
  // you may want to change this code later on, too
  constructor(size) {
    this.board = new Board(size);
    this.row = 0;
    this.col = 0;
    this.boardSize = size;
  }

  solve() {
    const result = [];
    const path = [];
    let numberOfResults = 0;

    const recurseFx = (recurseRow, recurseCol) => {
      if (
        recurseRow === this.boardSize - 1 &&
        recurseCol === this.boardSize - 1
      ) {
        //if you reach the end, push your path
        result.push(path);
        numberOfResults++;
        path.pop();
        return;
      }
      this.board.togglePiece(recurseRow, recurseCol); //toggle current place's value to mark visited
      //SOUTH
      if (
        recurseRow < this.boardSize - 1 &&
        !this.board.hasBeenVisited(recurseRow + 1, recurseCol)
      ) {
        //unvisited available space to the south
        path.push("south"); //add 'south' movement to path
        recurseFx(recurseRow + 1, recurseCol);
      }
      //EAST
      if (
        recurseCol < this.boardSize - 1 &&
        !this.board.hasBeenVisited(recurseRow, recurseCol + 1)
      ) {
        //unvisited available space to the east
        path.push("east"); //add 'east' movement to path
        recurseFx(recurseRow, recurseCol + 1);
      }
      //NORTH
      if (
        recurseRow > 0 &&
        !this.board.hasBeenVisited(recurseRow - 1, recurseCol)
      ) {
        //unvisited available space to the west
        path.push("west");
        recurseFx(recurseRow - 1, recurseCol);
      }
      //WEST
      if (
        recurseCol > 0 &&
        !this.board.hasBeenVisited(recurseRow, recurseCol - 1)
      ) {
        //unvisited available space to the east
        path.push("east");
        recurseFx(recurseRow, recurseCol - 1);
      }
      this.board.togglePiece(recurseRow, recurseCol); //toggle current place's value to mark unvisited
      path.pop(); //pops the path stack if you move backwards
    };

    recurseFx(this.row, this.col);
    return numberOfResults;
  }
}

module.exports = { RobotPaths };
