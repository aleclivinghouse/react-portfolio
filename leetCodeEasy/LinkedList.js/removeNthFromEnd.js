function removeNthFromEnd(head, n){
let node = head;
let count = 0;
while(node){
  count++;
}
let newNode = head;
let toRemove = count - n;
let newCount = 0;
while(newCount <= toRemove){
  newcount++;
  newNode = newNode.next;
}
newNode.val = newNode.next.val;
newNode.next = newNode.next.next;

}
