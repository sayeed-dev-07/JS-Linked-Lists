import LinkedList from "./linkedList.js";

const list = new LinkedList();


// ALL THIS TEST'S ARE GENERATED FROM CHATGPT


// --- append ---
list.append("Apple");
list.append("Banana");
list.append("Cherry");
console.log("After append:", list.toString()); // Apple -> Banana -> Cherry

// --- prepend ---
list.prepend("Avocado");
console.log("After prepend:", list.toString()); // Avocado -> Apple -> Banana -> Cherry

// --- size ---
console.log("Size of list:", list.size()); // 4

// --- head ---
console.log("Head of list:", list.head()); // Node with value: Avocado

// --- tail ---
console.log("Tail of list:", list.tail()); // Node with value: Cherry

// --- at(index) ---
console.log("Node at index 2:", list.at(2)); // Banana
console.log("Node at invalid index:", list.at(10)); // Error message

// --- pop ---
list.pop(); // Removes Cherry
console.log("After pop:", list.toString()); // Avocado -> Apple -> Banana

// --- contains(value) ---
console.log("Contains 'Apple':", list.contains("Apple")); // true
console.log("Contains 'Mango':", list.contains("Mango")); // false

// --- find(value) ---
console.log("Find index of 'Banana':", list.find("Banana")); // 2
console.log("Find index of 'Mango':", list.find("Mango")); // null

// --- insertAt(value, index) ---
list.insertAt("Mango", 1);
console.log("After insertAt(1):", list.toString()); // Avocado -> Mango -> Apple -> Banana

list.insertAt("First", 0); // Test insert at beginning
console.log("After insertAt(0):", list.toString()); // First -> Avocado -> Mango -> Apple -> Banana

list.insertAt("Last", list.size()); // Test insert at end
console.log("After insertAt(end):", list.toString()); // ... -> Banana -> Last

list.insertAt("Invalid", -1); // Invalid index
list.insertAt("Invalid", 100); // Invalid index

// --- removeAt(index) ---
list.removeAt(0); // Remove first
console.log("After removeAt(0):", list.toString());

list.removeAt(2); // Remove middle
console.log("After removeAt(2):", list.toString());

list.removeAt(list.size() - 1); // Remove last
console.log("After removeAt(last):", list.toString());

list.removeAt(100); // Invalid index
