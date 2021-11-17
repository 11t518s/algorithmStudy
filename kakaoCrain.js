function solution(board, moves) {
  const selectedBoard = [];
  let i = 0;
  let answer = 0;
  moves.map((movesItem) => {
    for (let boardItemIndex = 0; boardItemIndex < board.length; boardItemIndex++) {
      let boardItem = board[boardItemIndex];
      if (boardItem[movesItem - 1] !== 0) {
        selectedBoard.push(boardItem[movesItem - 1]);
        boardItem[movesItem - 1] = 0;
        if (selectedBoard.slice(-1).toString() == selectedBoard.slice(-2, -1).toString()) {
          answer = answer + 2;
          selectedBoard.pop();
          selectedBoard.pop();
        }
        break;
      }
    }
  });
  return answer;
}
