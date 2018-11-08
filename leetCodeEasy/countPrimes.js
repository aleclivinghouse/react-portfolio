function countPrimes(n){
  let result = 0;
  for(let i = 2; i < n; i++){
    prime = true;
    for(let j = 2; j*j<=i; j++){
      if(i%j===0){
        prime = false;
        break;
      }
    }
    if(prime){
      result++;
    }
  }
  return result;
}
