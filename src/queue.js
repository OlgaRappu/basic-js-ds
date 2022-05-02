const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

   constructor() {
   this.queue = new ListNode;}
  
  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    let curr = this.queue;
    if (curr.value == undefined) {curr.value = value}
    else 
    {while(curr.next!=null)
    curr = curr.next;
    let newNode = new ListNode;
    newNode.value = value;
    newNode.next =null;
    curr.next = newNode;}
    }

  dequeue() {
  let ret = this.queue.value;
  let curr = this.queue.next;
  this.queue.next = curr.next;
  this.queue.value = curr.value;
  return ret;
  }
}

module.exports = {
  Queue
};
