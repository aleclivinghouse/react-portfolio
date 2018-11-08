
//REVIEW THIS
function balancedParenthesis(str){
  let stack = [];
  let open = {'{':'}', '[':']', '(':')'};
  let closed = {'}': true, ']': true, ')': true};

  for(let char in str){
    if(open[char]){
      console.log(open[char]);
      stack.push(char);
    } else if(closed[char]){
      if(open[stack.pop()] !== char) return false;
    }
  }
  return true;
}


let print = balancedParenthesis('(adsf)');
console.log(print);
