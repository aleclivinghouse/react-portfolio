//determine whether n is a power of three, output true o
function powerOfThree(n){
  while(n!==1){
    if(n%3!==0){
      return false;
    }
    n = n/3;
  }
  return true;
}
