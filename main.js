// Node class: Each node in the linked list will have a value and a reference to the next node.
class Node {
  // Constructor takes a value for the node and an optional nextNode, defaulting to null
  constructor(value = null, nextNode = null) {
    this.value = value; // Assign the value of the node
    this.nextNode = nextNode; // Reference to the next node, which defaults to null
  }
}

// LinkedList class: This will represent the full linked list.
class LinkedList {
  constructor() {
    this.headNode = null; // Initially, there is no head node (empty list)
  }

  // Append method: Adds a new node to the end of the list
  append(value) {
    const newNode = new Node(value); // Create a new node with the given value
    if (!this.headNode) {
      // If the list is empty
      this.headNode = newNode; // The new node is the head of the list
      return;
    }
    let current = this.headNode; // Start at the head of the list
    while (current.nextNode) {
      // Traverse until the last node
      current = current.nextNode;
    }
    current.nextNode = newNode; // Set the next of the last node to the new node
  }

  // Prepend method: Adds a new node to the start of the list
  prepend(value) {
    const newNode = new Node(value, this.headNode); // New node points to the current head node
    this.headNode = newNode; // The new node is now the head of the list
  }

  // Size method: Returns the total number of nodes in the list
  size() {
    let count = 0; // Initialize a counter
    let current = this.headNode; // Start at the head node
    while (current) {
      // Traverse through the list
      count++; // Increase the count for each node
      current = current.nextNode; // Move to the next node
    }
    return count; // Return the total count of nodes
  }

  // Head method: Returns the first node in the list
  head() {
    return this.headNode; // Simply return the head node
  }

  // Tail method: Returns the last node in the list
  tail() {
    let current = this.headNode; // Start at the head node
    if (!current) return null; // If the list is empty, return null
    while (current.nextNode) {
      // Traverse until the last node
      current = current.nextNode;
    }
    return current; // Return the last node
  }

  // At method: Returns the node at the given index
  at(index) {
    let current = this.headNode; // Start at the head node
    let count = 0; // Initialize a counter
    while (current) {
      // Traverse through the list
      if (count === index) {
        // If the current index matches the given index
        return current; // Return the node at that index
      }
      count++; // Increase the counter
      current = current.nextNode; // Move to the next node
    }
    return null; // If the index doesn't exist, return null
  }

  // Pop method: Removes the last node from the list
  pop() {
    if (!this.headNode) return null; // If the list is empty, there's nothing to pop
    if (!this.headNode.nextNode) {
      // If the list has only one node
      this.headNode = null; // The list becomes empty after popping the node
      return;
    }
    let current = this.headNode; // Start at the head node
    while (current.nextNode.nextNode) {
      // Traverse until the second-to-last node
      current = current.nextNode;
    }
    current.nextNode = null; // Set the next of the second-to-last node to null, removing the last node
  }

  // Contains method: Checks if a value exists in the list
  contains(value) {
    let current = this.headNode; // Start at the head node
    while (current) {
      // Traverse through the list
      if (current.value === value) return true; // If the current node's value matches, return true
      current = current.nextNode; // Move to the next node
    }
    return false; // If the value isn't found, return false
  }

  // Find method: Returns the index of the node containing the value, or null if not found
  find(value) {
    let current = this.headNode; // Start at the head node
    let index = 0; // Initialize the index counter
    while (current) {
      // Traverse through the list
      if (current.value === value) {
        // If the current node's value matches
        return index; // Return the index
      }
      current = current.nextNode; // Move to the next node
      index++; // Increase the index counter
    }
    return null; // If the value isn't found, return null
  }

  // toString method: Converts the list into a string representation for easy printing
  toString() {
    let current = this.headNode; // Start at the head node
    let str = ""; // Initialize an empty string to build the representation
    while (current) {
      // Traverse through the list
      str += `( ${current.value} ) -> `; // Add the current node's value to the string
      current = current.nextNode; // Move to the next node
    }
    return str + "null"; // Append 'null' at the end to represent the end of the list
  }

  // InsertAt method: Inserts a new node at the given index
  insertAt(value, index) {
    if (index === 0) {
      // If inserting at the head
      this.prepend(value); // Just call prepend method to add at the beginning
      return;
    }
    let current = this.headNode; // Start at the head node
    let count = 0; // Initialize a counter
    while (current && count < index - 1) {
      // Traverse until the node just before the insertion point
      current = current.nextNode;
      count++;
    }
    if (current) {
      // If the current node exists
      const newNode = new Node(value, current.nextNode); // Create the new node and link it to the next node
      current.nextNode = newNode; // Insert the new node by linking it to the current node
    } else {
      console.log("Index out of bounds"); // If the index is invalid, print an error message
    }
  }

  // RemoveAt method: Removes the node at the given index
  removeAt(index) {
    if (index === 0 && this.headNode) {
      // If removing the head node
      this.headNode = this.headNode.nextNode; // Set the head to the next node
      return;
    }
    let current = this.headNode; // Start at the head node
    let count = 0; // Initialize a counter
    while (current && count < index - 1) {
      // Traverse until the node just before the one to be removed
      current = current.nextNode;
      count++;
    }
    if (current && current.nextNode) {
      // If the current node and next node exist
      current.nextNode = current.nextNode.nextNode; // Skip over the node to be removed
    } else {
      console.log("Index out of bounds"); // If the index is invalid, print an error message
    }
  }
}

let list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());
console.log(list.at(3));;
list.pop();
console.log(list.toString());
