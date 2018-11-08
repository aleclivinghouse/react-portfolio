function deleteNode(node){
  if(node.next===null){return null;}

  node.val = node.next.val;
  node.next = node.next.next;
}


function deleteNode(node){
  if(node.next===null){return null;}
  node.val = node.next.val;
  node.next = node.next.next;
}
