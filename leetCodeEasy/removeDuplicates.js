//[0,0,1,1,1,2,2,3,3,4],
//return 5 array should look like[0,0,1,1,1,2,2,3,3,4];
function removeDuplicates(arr){
  var countDict = {};
  for(var i = 0; i < arr.length; i++){
  if(!countDict[arr[i]]){
    countDict[arr[i]] = 1;
  }
 }
 console.log(Object.keys(countDict));
 console.log(Object.keys(countDict).length);
}

removeDuplicates([1,1,2,2,2,3,3]);
