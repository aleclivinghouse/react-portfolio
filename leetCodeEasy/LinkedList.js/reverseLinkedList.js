function reverseLinkedList(list){
  let node = list;
  let previous = null;

  while(node){
    let save = node.next;
    node.next = previous;
    previous = node;
    node = save;
  }
  return previous;
}
