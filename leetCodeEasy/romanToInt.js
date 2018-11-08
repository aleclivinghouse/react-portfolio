function romanToInt(str){
  let result = 0;

  for(let i = 0; i < str.length; i++){
    if(i > 0 && (c2n(str[i]) > c2n(s[i-1]))){
      result -= 2*c2n(s[i-1]); //times two because previously added
    }
    result += c2n(str[i]);
  }
  return result;
}


function c2n(c){
  switch(c){
    case 'I': return 1;
    case 'V': return 5;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;
    default: return 0;
  }
}
