

function kthSmallest(root, k){
  let result;
  let count = 0;
  let isFound = false;

  function traverse(root){
    if(root !== null && !isFound){
      traverse(root.left);
      count++;

    if(count === k){
      let isFound = true;
      let result = root.val;

    }
    traverse(root.right);
  }
  }
  traverse(root);
  return result;
}
