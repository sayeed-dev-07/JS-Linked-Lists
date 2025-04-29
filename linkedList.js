import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.headNode = null;
    this.NodeLength = 0;
  }
  append(value) {
    this.NodeLength++;
    const newNode = new Node(value);
    if (!this.headNode) {
      this.headNode = newNode;
      return;
    }
    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }
  prepend(value) {
    this.NodeLength++;

    const newNode = new Node(value, this.headNode);
    this.headNode = newNode;
  }
  size() {
    return this.NodeLength;
  }
  head() {
    return this.headNode;
  }
  tail() {
    let current = this.headNode;
    if (!current) {
      return null;
    }
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }
  at(index) {
    let current = this.headNode;
    if (index > this.NodeLength) {
      return "INDEX IS GREATER THAN LINKEDLIST LENGTH!!!";
    }
    if (index === 0) {
      return current;
    }
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current;
  }
  pop() {
    this.NodeLength--;
    if (!this.headNode) {
      return;
    }
    let current = this.headNode;
    if (!current.nextNode) {
      current.nextNode = null;
    }
    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = null;
  }
  contains(value) {
    let current = this.headNode;
    for (let i = 0; i < this.NodeLength; i++) {
      if (value === current.value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }
  find(value) {
    let current = this.headNode;
    for (let i = 0; i < this.NodeLength; i++) {
      if (current.value === value) {
        return i;
      }
      current = current.nextNode;
    }
    return null;
  }
  insertAt(value, index) {
    const newNode = new Node(value);
    
  }
  toString() {
    let current = this.headNode;
    let str = "";
    while (current) {
      str += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return (str += "null");
  }
}
const list = new LinkedList();
list.append("helo");
list.append("hi");
list.append("kire");
list.prepend("kire2");
list.prepend("kire5");
list.prepend("kire53");

console.log(list.toString());
console.log(list.find("kire"));
console.log(list.contains("kirfde5")); // false
// console.log(list.size());
// console.log(list.head());
// console.log(list.tail());
// console.log(list.at(4));

// console.log(list.head);
