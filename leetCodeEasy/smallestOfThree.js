function smallestInThree(arr1, arr2, arr3){
  let i = 0;
  let k = 0;
  let j = 0;
  while( i < arr1.length){
    if(arr1[i] === arr2[k] && arr2[k] === arr3[j]){
      console.log(arr[i]);
    } else if(arr1[i] < arr2[k]){
    	j++;
    } else if (arr2[j] < arr3[k]){
    	k++;
    }
  }
}



function removeDuplicates(string){
  let newDict = {};
  let newString = '';
  for(let i = 0; i < string.length; i++){
    if(!newDict[str[i]]){
      newString += str[i];
      newDict[str[i]] = true;
    }
  }
  return newString;
}

function longestCommonSubSequence(str1, str2){

}
