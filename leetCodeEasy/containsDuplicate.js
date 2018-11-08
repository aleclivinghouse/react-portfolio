function containsDuplicate(arr){
  let countDict = {};
  for(let i = 0; i < arr.length; i++){
    if(!countDict[arr[i]]){
      countDict[arr[i]] = 1;
    } else{
       console.log(true);
    }
  }
  return false;
}

containsDuplicate([1, 6, 2, 3, 4, 5]);
