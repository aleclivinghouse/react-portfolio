function kthSmallest(root, k){
  let result = null;
  let count = 0;
  let isFound = false;

  function traverse(root){
    if(root !== null && !isFound){
      traverse(root.left);
      count++;
      if(count===k){
        result = root.val;
        isFound = true;
        return;
      }
      traverse(root.right);
    }
  }
  traverse(root);
  return result;
}
