function reverseLinkedList(head){
  let curr = head;
  let prev = null;
  while(curr){
    let save = curr.next;
    let curr.next = prev;
    let prev = curr;
    let  curr = save;
  }
  return prev;
}


function reverseLinkedList(head){
  let curr = head;
  let prev = null;
  while(curr){
    let save = curr.next;
    let curr.next = prev;
    let prev = curr;
    let curr = save;
  }
}

function reverseLinkedList(head){
  let curr = head;
  let prev = null;
  while(curr){
    let save = curr.next;
    let curr.next = prev;
    let prev = curr;
    let curr = save;
  }
  return prev;
}
