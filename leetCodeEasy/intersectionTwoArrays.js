function intersectionTwoArrays(arr1, arr2){
  let hash = {};
  let result = [];
  for(let i = 0; i < arr1.length; i++){
    if(!hash[arr[i]]){
      hash[arr[i]] = 1;
    } else {
      hash[arr[i]]++;
    }
  }
  for(let i = 0; i < arr2.length; i++){
    if(hash[arr2[i]]){
      hash[arr2[i]]--;
      result.push(hash[arr2[i]])
    }
  }
  return result;
}
