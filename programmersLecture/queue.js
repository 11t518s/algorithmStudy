class queueOfArray {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }
  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class queueOfLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return value;
  }
  peek() {
    return this.head.value;
  }
}

class circleQueueOfArray {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.queue = [];
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }

  enqueue(value) {
    if (this.isFull()) {
      console.log("Queue is full");
      return;
    }
    this.queue[this.rear] = value;
    this.rear = (this.rear + 1) % this.maxSize;
    this.size += 1;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front = (this.front + 1) % this.maxSize;
    this.size -= 1;
    return value;
  }

  isFull() {
    return this.size === this.maxSize;
  }

  peek() {
    return this.queue[this.front];
  }
}

const arr2 = [1, 2, 3, 4, 5];
const result2 = arr2.reduce((acc, cur, idx) => {
  return (acc += cur);
}, 10);
console.log(result2); // 25

function solution(priorities, location) {
    const maxNumOfPriorities = priorities.reduce((acc, curr) => {
        if ( acc < curr) {
            acc = curr
        }
        return acc
    }, 0)
    
    const indexOfMaxNumFromPriorities = priorities.indexOf(maxNumOfPriorities)
    
    const PrioritiesObject = priorities.map((priority, index) => {
        return {priority, location: index}
    })
    
    const orderedPrioritiesObject = [...PrioritiesObject.slice(indexOfMaxNumFromPriorities, priorities.length), ...PrioritiesObject.slice(0, indexOfMaxNumFromPriorities)]
 
    const answer = orderedPrioritiesObject.findIndex(priorityObject => priorityObject.location === location) +1
    
    return answer
}
