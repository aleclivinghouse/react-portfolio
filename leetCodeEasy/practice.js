function isSymmetric(root){
   isSymmetricHelper(root.left, root.right);
}

function isSymmetricHelper(left, right){
  if(left===null && right === null){
    return true;
  }
  if((left === null && right !== null) || (left !== null && left===null)){
    return false;
  }
  if(left !== right){
    return false;
  }
  return isSymmetricHelper(left.left, right.right) && isSymmetricHelper(left.right, right.left);
}
