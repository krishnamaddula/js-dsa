//Shallow copy
let arr = [];
for (let i = 0; i < 100; i++) {
    arr[i] = i + 1;
}
let arr2 = arr;
arr[0] = 200;
console.log(arr2[0]); //200

//Deep copy
const deepCopy = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        arr2[i] = arr1[i];
    }
}

let deepArr1 = [];
for (let i = 0; i < 100; i++) {
    deepArr1[i] = i + 1;
}
let deepArr2 = [];
deepCopy(deepArr1, deepArr2);
deepArr1[0] = 300;
console.log(deepArr1[0]); //300
console.log(deepArr2[0]); //1


//Creating, Linking and printing Nodes
//Each instance of Node needs the ability to store data and the ability to point to other node
let Node = (data, next) => ({
    data: data,
    next: next
});

let first = Node(3);
let second = Node(5);
first.next = second; // data:3, next: points to second
let third = Node(6);
second.next = third;
let last = Node(7);
third.next = last;

const printNodes = node => {
    while (node) {
        console.log(node.data);
        node = node.next;
    }
};

printNodes(3); // Prints 3,4,6,7
printNodes(7);  //Prints 7

//Linked List
//Starting point is Head Pointer
//End point is Tail Pointer
//Operations: Add, Remove, Find, Enumerate

isEmpty
size
prepend
append
remove
contains
print


function LinkedList() {
    this.head = null;
}

LinkedList.prototype.size = function () {
    let current = this.head;
    let count = 0;
    while (current) {
        count++;
        current = current.next;
    }
    return count;
}

LinkedList.prototype.isEmpty = function () {
    return !this.head;
}

//Create new node
//Make it point to current head
//update this.head to point to new node
LinkedList.prototype.prepend = function (data) {
    let node = Node(data, this.head);
    this.head = node;
}

//Create a new node using data
//Tranverse to end of the list
//Make last node next value point to new node
LinkedList.prototype.append = function (data) {
    let node = Node(data);
    if (this.isEmpty()) {
        this.head = node;
        return;
    }
    let current = this.head;
    while (current.next) {
        current = current.next;
    }
    current.next = node;
}

let linkedList1 = new LinkedList(1);
linkedList1.isEmpty();
linkedList1.size();
linkedList1.prepend(10);
linkedList1.prepend(11);
linkedList1.prepend(11);
linkedList1.prepend(15);
linkedList1.append(5);
linkedList1.append(7);
console.log(linkedList1);
