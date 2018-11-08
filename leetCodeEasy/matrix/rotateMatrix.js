/*
[
[1, 2, 3].
[4, 5, 6].
[7, 8, 9]
]

[[7,4,1],
[8,5,2],
[9,6,3]]
*/

function rotate(matrix){
  let row = matrix.length;
  let col = matrix[0].length;
  console.log(matrix);

  for(let i = 0; i < row; i++){
    for(let j = 0; j < col-i; j++){
      swap(matrix, i, j, row-1-j, col-1-i);
    }
  }
  console.log(matrix);

  for(let i = 0; i < Math.floor(row/2); i++){
    for(let j = 0; j < col; j++){
      swap(matrix, i, j, row-1-i, j);
    }
  }
  return matrix;
}

function swap(matrix, x1, y1, x2, y2){
  console.log(matrix[x1][y1]);
  let temp = matrix[x1][y1];
  matrix[x1][y1] = matrix[x2][y2];
  matrix[x2][y2] = temp;
}


let thing = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];

let print = rotate(thing);
console.log(print);
