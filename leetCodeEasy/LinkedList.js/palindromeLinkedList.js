function palindromeLinkedList(head){
  if(head === null || head.next === null){
    return true;
  }
  let slow =head;
  let fast = head;

  while(fast.next && fast.next.next){
    slow= slow.next;
    fast = fast.next.next;
  }

  let secondHead = slow.next;
  let p1 = secondHead;
  let p2 = secondHead.next;

  while(p1 && p2){
    let temp = p2.next;
    p2.next = p1;
    p1 = p2;
    p2 = temp;
  }

  secondHead.next = null;

  p = p1;
  q = head;

  while(p && q){
    if(p.val !== q.val){
      return false;
    }

    p = p.next;
    q = q.next;
  }
  return true;

}
