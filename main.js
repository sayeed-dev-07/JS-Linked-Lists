class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.arr = [];
  }
  append(val) {
    let newNode = new Node(val)
    this.value = val;
    this.arr.push(val);
  }
  preappend(val) {
    let newNode = new Node(val, this.arr[1])
    this.arr.unshift(val);
  }
  size() {
    return this.arr.length;
  }
  head() {
    return this.arr[0];
  }
  tail() {
    return this.arr[this.arr.length - 1];
  }
  at(index) {
    if (index > this.arr.length) {
      return "ERROR the index is not exits in current array!";
    } else {
      return this.arr.at(index);
    }
  }
  pop() {
    this.arr.pop();
  }
  contains(val) {
    if (this.arr.includes(val)) {
      return true;
    } else {
      return false;
    }
  }
  find(val) {
    for (let i = 0; i < this.arr.length; i++) {
      if (val === this.arr[i]) {
        return i;
      }
    }
    return null;
  }
  toString() {
    let str = '';
    let lastNode = null;
    
    for (let i = 0; i < this.arr.length; i++) {
        str += `(${this.arr[i]}) -> `
    }
    return str += `${lastNode}`;

  }
  insertAt(val, indx){
    let newNode = new Node(val, this.arr[indx + 1])
    this.arr.splice(indx, 0, val)
  }
  removeAt(indx){
    this.arr.splice(indx, 1)
  }
}


