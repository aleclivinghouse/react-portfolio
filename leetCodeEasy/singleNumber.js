/*
Given a non-empty array of integers,
every element appears twice except for one. F
ind that single one.
*/
function singleNumber(arr){
  let countDict = {};
  for(let i = 0; i < arr.length; i++){
    if(!countDict[arr[i]]){
      countDict[arr[i]] = 1;
    } else{
      countDict[arr[i]]++;
   }
  }
  let values = Object.values(countDict);
  console.log(values);
  for(let j = 0; j < values.length; j++){
  	if(values[j] > 1){
     console.log("true");
    }
  }
}

singleNumber([1,1,2,3,4]);
