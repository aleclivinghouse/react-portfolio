function arrayToBST(arr){
  return generate(arr, 0, arr.length -1);
}

function generate(arr, start, end){
  var midIndex = start + ((end - start)/2);
   var midVal = nums[midIndex];
   let node = new TreeNode(midVal);
   node.left = generate(arr, start, midIndex-1);
   node.right = generate(arr, midIndex + 1, end);

   return node;
}


function arrayToBST(arr);
