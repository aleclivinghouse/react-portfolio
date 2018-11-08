function rotate(arr, k){
  for(let i=0; i < k; i++){
    arr.unshift(arr.pop());
  }
}
