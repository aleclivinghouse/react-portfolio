function maximumSubArray(arr){
  let sum = 0;
  let maxSum = -Infinity;

  for(let i=0; i < arr.length; i++){
    sum +=arr[i];
    if(sum > maxSum){
      maxSum = sum;
    }
    if(sum < 0){
      sum = 0;
    }
  }
  return maxSum;
}
