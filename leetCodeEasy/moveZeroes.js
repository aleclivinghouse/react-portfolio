/*
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
*/
function moveZeroes(arr){
  let y = 0; //y is the zero pointer

  for(let i=0; i < arr.length; i++){
    if(arr[i] !== 0){
      let temp = arr[i];
      arr[i] = arr[y];
      arr[y] = temp;
      y++;
    }
  }
  return arr;
}


console.log(moveZeroes([0,1,0,3,12]));
