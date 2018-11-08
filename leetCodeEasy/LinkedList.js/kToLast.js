function findKthToLast(k, head){
  if(head===null || k<1){
    return;
  } else if(k===1){
    console.log(head.val);
    findKthToLast(k, head.next);
  } else{
    findKthToLast(k-1, head.next)
  }
}
