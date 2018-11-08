//Determin if a 9x9 board is valid
//1each row must contain digits 0=9 withougt repition
//each column must contian digits 0-9 without repition
//each of 9 3X3 boxes mush contian digits 0-9 without repition

function isValidSudoku(board){
  let row = board.length;
  let col = board[0].length;
  for(let i = 0; i < row; i++){
    let dupCheck = [];
    for(let j = 0; j < col; j++){
      if board[i][j] !== '.' && dupCheck[i][j]{
        return false;
      } else {
        dupCheck[board[i][j]] = true;
      }
    }
  }

  for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
      if(board[j][i] !== '.' && dupCheck[board[j][i]]){
        return false;
      } else {
        dupCheck[board[j][i]] = true;
      }
    }
  }

  for(let i = 0; i < row; i+=3){
    for(j=0; j < row; j+=3){

      for(let x = 0; x < 3; x++){
        for(let y = 0; y < 3; y++){
          if(board[i + x][j +y] !== '.' && dupCheck[board[i + x][j+y]]){
            return false;
          } else {
            dupCheck[board[i+x][j+y]] = true;
          }
        }
      }
    }
  }
  return true;
}// end
