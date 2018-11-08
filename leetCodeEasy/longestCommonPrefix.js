function longestCommonPrefix(arr){
  let result='';

  for(let i = 0; i < arr[0].length; i++){
    let currChar = str[0][i];
    for(let j=1; j<arr.length; j++){
      if(currChar !== arr[i][j]){
        return result;
      }

      if(arr[i].length===i){
        return result;
      }
    }
    result += currChar;
  }
  return result;
}
