  class Node {
  constructor(data) {
    this.data = data;
    this.hijo = [];
  }
}

class Arbol {
  constructor() {
    this.root = null;
  }

  add(data, toNodeData) {
    const node = new Node(data);
    const parent = toNodeData ? this.findBFS(toNodeData) : null;

    if (parent) {
      parent.hijo.push(node);
    } else {
      if (!this.root) {
        this.root = node;
      } else {
        return "error 1";
      }
    }
  }

  findBFS(data) {
    let _node = null;

    this.traverseBFS((node) => {
      if (node.data == data) {
        _node = node;
      }
    });
    return _node;
  }

  traverseBFS(cb) {
    const queue = [this.root];

    if (cb) {
      while (queue.length) {
        const node = queue.shift();

        cb(node);

        for (const child of node.hijo) {
          queue.push(child);
        }
      }
    }
  }
}
  

let arbol = new Arbol();
arbol.add("1");
arbol.add("2", "1");
arbol.add("4", "2");
arbol.add("1", "2");
arbol.traverseBFS((node) => console.log(node));
