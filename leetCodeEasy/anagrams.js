function anagrams(stringA, stringB){
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  for(let char in aCharMap){
    if(aCharMap[char] !== bCharMap[char]){
      return false;
    }
  }
  return true;
}

function buildCharMap(str){
  const charMap = {};
  for(let char of str){
    if(!charMap[char]){
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }
  return charMap;
}
