let size = 0;
let head = null;
let tail = null;

// uwu

class LinkedList {

    append (value) {
        let node = new Node(value);
        if (head == null) {
            head = node;
            tail = node;
        } else {
            tail.next = node;
            tail = node;
        }
        size++;
        return head;
    }
    prepend (value) {
        let node = new Node(value);
        node.next = head;
        head = node;
        size++;
        return head;
    }
    size () {
        return size;
    }
    head () {
        return [head, head.value];
    }
    tail () {
        return [tail, tail.value];
    }
    at (index) {
        let currentNode = head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    pop () {
        let currentNode = head;
        let prevNode;
        while (currentNode.next != null) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        prevNode.next = null;
        currentNode = null;
        size--;
        return head;
    }
    find (value) {
        let index = 0;
        let currentNode = head;
        while (currentNode != null) {
            if (currentNode.value == value) {
                return index;
            } else {
                currentNode = currentNode.next;
                index++;
            }
        }
        return null;
    }
    toString () {
        let currentNode = head;
        let nodeStr = '';
        while (currentNode != null) {
            if (currentNode.next == null) {
                nodeStr += `( ${currentNode.value} ) -> null `;
            } else {
                nodeStr += `( ${currentNode.value} ) -> `;
            }
            currentNode = currentNode.next;
        }
        return nodeStr;
    }
    insertAt (value, index) {
        let node = new Node (value);
        let currentNode = head;
        let currentIndex = 0;
        let prevNode;
        while (currentIndex <= index) {
            if (currentIndex == index) {
                prevNode.next = node;
                node.next = currentNode;
                currentNode = currentNode.next;
                currentIndex++;
            } else {
                prevNode = currentNode;
                currentNode = currentNode.next;
                currentIndex++;
            }
        }
        return head;

    }
    removeAt (index) {
        let currentNode = head;
        let currentIndex = 0;
        let prevNode;
        while (currentNode.next != null) {
            if (currentIndex == index) {
                prevNode.next = currentNode.next;
                currentIndex++;
            } else {
                prevNode = currentNode;
                currentNode = currentNode.next;
                currentIndex++;   
            }
        }
        currentNode = null;
        size--;
        return head;
    }
}

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
        return{value, next};
    }
}

let list = new LinkedList();
list.append(4);
list.append(20);
list.append(9966);
list.prepend(0.3);
list.append(54);
list.prepend(1);
list.append(444);
list.prepend(7.65);
console.log(list.toString());
list.insertAt(0.02, 5);
console.log(list.toString());