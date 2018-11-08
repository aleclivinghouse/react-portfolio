



function mergeTwoLinkedLists(l1, l2){
  if(!l1){return l2};
  if(!l2){return l1};

  if(l1.val < l2.val){
    l1.next = mergeTwoLinkedLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLinkedLists(l1, l2.next);
    return l2;
  }
}


function mergeTwoLinkedLists(l1, l2){
  if(!l1){return l2};
  if(!l2){return l1};

  if(l1.val < l2.va){
    l1.next = mergeTwoLinkedLists(l1.next, l2);
    return l1
  } else {
    l2.next = mergeTwoLinkedLists(l1, l2.next);
    return l2;
  }
}
