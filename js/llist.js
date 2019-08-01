const Node = function (value) {
    this.value = value;
    this.next = null;
};

const LList = function () {
    root = null;

    this.getSize = () => {
        let tempNode = root;
        let size = 0;

        while (tempNode !== null ) {
            size++;
            tempNode = tempNode.next;
        }

        return size;
    };

    this.toString = () => {
        let tempNode = root;
        let llist = '';

        while (tempNode !== null ) {
            llist  += `${tempNode.value}, `;
            tempNode = tempNode.next;
        }

        if (llist.length !== 0) {
            llist = llist.slice(0, -2);
        }

        return llist;
    };

    this.push = (value) => {
        if (value !== undefined) {
            const node = new Node(value);

            if (root === null) {
                root = node;
            } else {
                let tempNode = root;

                while (tempNode.next) {
                    tempNode = tempNode.next;
                }

                tempNode.next = node;
            }

            return this.getSize();
        } else {
            return 0;
        }
    };

    this.pop = () => {
        if (!root) {
            return undefined;
        }

        let tempNode = root;
        if (tempNode.next !== null) {
            var nextNode = tempNode.next;
        }
        let value = undefined;

        if (tempNode !== null) {
            if (tempNode.next !== null) {
                while (nextNode.next !== null) {
                    tempNode = tempNode.next;
                    nextNode = tempNode.next;
                }
                tempNode.next = null;
                value = nextNode.value;
            } else {
                value = root.value;
                root = null;
            }
        }
        return value;
    };

    this.shift = (value) => {
        const node = new Node(value);

        if (root === null) {
            root = node;
        } else {
            node.next = root;
            root = node;
        }

        return this.getSize();
    };

    this.unshift = () => {
        if (!root) {
            return undefined;
        }

        const node = root;
        root = root.next;
        return node.value;
    };

    this.sort = () => {
        if (!root) {
            return undefined;
        }

        let e = null;
        let temp = new Node();

        while(e != root.next)
        {
            let c = root, a = root;
            let b = root.next;

            while (a !== e) {
                if(a.value > b.value) {
                    if(a === root) {
                        temp = b.next;
                        b.next = a;
                        a.next = temp;
                        root = b;
                        c = b;
                    } else {
                        temp = b.next;
                        b.next = a;
                        a.next = temp;
                        c.next = b;
                        c = b;
                    }
                } else {
                    c = a;
                    a = a.next;
                }

                b = a.next;

                if (b === e) {
                    e = a;
                }
            }
        }

        return this.toString();
    };

    this.set = (index, element) => {
        if (this.getSize() <= index || index < 0) {
            throw new Error('Invalid index provided!');
        } else if (index === 0) {
            root.value = element;
        } else {
            let node = root;
            let i = 0;

            while(i < index) {
                if(node.next !== null) {
                    node = node.next;
                    i++;
                }
            }

            node.value = element;
        }
    };

    this.get = (index) => {
        if(!root) {
            return undefined;
        }
        let node = root;
        if (this.getSize() <= index || index < 0) {
            throw new Error('Invalid index provided!');
        } else {
            let i = 0;

            while(i < index) {
                if(node.next !== null) {
                    node = node.next;
                    i++;
                }
            }
        }

        return node.value;
    };

    this.slice = (begin, end) => {
        if(!root) {
            return undefined;
        }
        let tempNode = root;
        if (tempNode.next !== null) {
            var nextNode = tempNode.next;
        }
        let arrList = [];
        let j = 1,
            k = 0;

        if (!root || this.getSize() <= begin || begin < 0 || end < 0 || end < begin) {
            throw new Error('Invalid argument provided!');
        } else if (this.getSize() > begin && end === undefined) {
            if (begin === 0) {
                for (let i = 0; i < this.getSize(); i++) {
                    arrList[i] = tempNode.value;
                    tempNode = tempNode.next;
                }

                root = null;
            } else {
                while (j < begin) {
                    tempNode = tempNode.next;
                    nextNode = tempNode.next;
                    j++;
                }

                for (let i = j + 1; i <= this.getSize(); i++) {
                    if (nextNode !== null) {
                        arrList[k] = nextNode.value;
                        nextNode = nextNode.next;
                        k++;
                    }
                }

                tempNode.next = null;
            }

            return arrList;
        } else {
            if (begin === 0) {
                for (let i = begin; i < end; i++) {
                    if (tempNode.value) {
                        arrList[i] = tempNode.value;
                        tempNode = tempNode.next;
                        k++;
                    } else {
                        arrList[i] = undefined;
                        k++;
                    }
                }

                root = tempNode;
            } else {
                while (j < begin) {
                    tempNode = tempNode.next;
                    nextNode = tempNode.next;
                    j++;
                }

                for (let i = j; i < end; i++) {
                    if (nextNode !== null) {
                        arrList[k] = nextNode.value;
                        nextNode = nextNode.next;
                        k++;
                    } else {
                        arrList[k] = undefined;
                        k++;
                    }
                }

                tempNode.next = nextNode;
            }

            return arrList;
        }
    };

    this.splice = function (begin, count, element) {
        if (!root) {
            return undefined;
        }
        let tempNode = root;
        if (tempNode !== null) {
            var nextNode = tempNode.next;
        }
        let arrList = [];
        let argument = [];
        let j = 1,
            k = 0;

        for (let i = 2, k = 0; i < arguments.length; i++, k++) {
            argument[k] = arguments[i];
        }

        if ((this.getSize() < begin && argument.length === 0) || begin < 0 || count < 0 || (this.getSize() < begin && argument.length > 0)) {
            throw new Error('Invalid argument provided!');
        } else if (this.getSize() > begin && count > 0 && argument.length === 0) {
             if (begin === 0) {
                 for (let i = begin; i < begin + count; i++) {
                     if (tempNode !== null) {
                         arrList[i] = tempNode.value;
                         tempNode = tempNode.next;
                     } else {
                         arrList[i] = undefined;
                         k++;
                     }
                 }

                 root = tempNode;
             } else {
                 while (j < begin) {
                     tempNode = tempNode.next;
                     nextNode = tempNode.next;
                     j++;
                 }

                 for (let i = j + 1; i <= begin + count; i++) {
                     if (nextNode !== null) {
                         arrList[k] = nextNode.value;
                         nextNode = nextNode.next;
                         k++;
                     } else {
                         arrList[k] = undefined;
                         k++;
                     }
                 }

                 tempNode.next = nextNode;
             }

        } else if (this.getSize() > begin && argument.length > 0 && count === 0) {
            if (begin === 0) {
                for (let i = argument.length - 1; i >=0; i--) {
                    this.shift(argument[i]);
                }
            } else {
                while (j < begin) {
                    tempNode = tempNode.next;
                    nextNode = tempNode.next;
                    j++;
                }

                for (let i = 0; i < argument.length; i++) {
                    const temp = new Node(argument[i]);
                    tempNode.next = temp;
                    tempNode = tempNode.next;
                    }
                }

            tempNode.next = nextNode;


        } else if (this.getSize() > begin && argument.length > 0 && count > 0) {
            if (begin === 0) {
                for (let i = begin; i < begin + count; i++) {
                    if (tempNode !== null) {
                        arrList[i] = tempNode.value;
                        tempNode = tempNode.next;
                    } else {
                        arrList[i] = undefined
                        k++;
                    }
                }

                root = tempNode;

                for (let i = argument.length - 1; i >=0; i--) {
                    this.shift(argument[i]);
                }
            } else {
                while (j < begin) {
                    tempNode = tempNode.next;
                    nextNode = tempNode.next;
                    j++;
                }

                for (let i = j + 1; i <= begin + count; i++) {
                    if (nextNode !== null) {
                        arrList[k] = nextNode.value;
                        nextNode = nextNode.next;
                        k++;
                    } else {
                        arrList[k] = undefined;
                        k++;
                    }
                }

                for (let i = 0; i < argument.length; i++) {
                    const temp = new Node(argument[i]);
                    tempNode.next = temp;
                    tempNode = tempNode.next;
                }

                tempNode.next = nextNode;
            }
        }
        return arrList;
    };

};