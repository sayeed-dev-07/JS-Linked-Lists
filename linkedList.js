import Node from "./node.js";

export default class LinkedList{
    constructor(){
        this.head = null;
    }
    append(value){
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.nextNode){
            current = current.nextNode;
        }
        current.nextNode = newNode;
    }
    prepend(value){
        const newNode = new Node(value);
        newNode.nextNode = this.head
        this.head = newNode;

    }
    printlist(){
        let current = this.head;
        while(current){
            console.log(current.value);
            current = current.nextNode;
        }
    }
}
const list = new LinkedList();
list.append('helo')
list.append('hi');
list.append('kire');
list.prepend('despacito')
console.log(list.head);
list.printlist()