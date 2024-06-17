// Hash table implementation with collision resolution techniques

class HashTable {
    constructor(size) {
      this.size = size;
      this.table = new Array(size);
    }
  
    // Hash function to generate an index for the key
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.size;
    }
  
    // Insert a key-value pair into the hash table
    insert(key, value) {
      const index = this.hash(key);
  
      // If the index is empty, store the value directly
      if (!this.table[index]) {
        this.table[index] = { key, value };
      } else {
        // Handle collision using a collision resolution technique (e.g., chaining)
        let currentNode = this.table[index];
        while (currentNode.next) {
          currentNode = currentNode.next;
        }
        currentNode.next = { key, value };
      }
    }
  
    // Retrieve a value from the hash table based on the key
    get(key) {
      const index = this.hash(key);
  
      // If the index is empty, the key is not present in the hash table
      if (!this.table[index]) {
        return undefined;
      }
  
      // Traverse the linked list (if any) to find the value
      let currentNode = this.table[index];
      while (currentNode) {
        if (currentNode.key === key) {
          return currentNode.value;
        }
        currentNode = currentNode.next;
      }
  
      // Key not found in the hash table
      return undefined;
    }
  }
  
  // Usage example
  const myHashTable = new HashTable(10);
  myHashTable.insert("apple", 10);
  myHashTable.insert("banana", 20);
  myHashTable.insert("orange", 30);
  
  console.log(myHashTable.get("apple")); // Output: 10
  console.log(myHashTable.get("banana")); // Output: 20
  console.log(myHashTable.get("orange")); // Output: 30
  console.log(myHashTable.get("grape")); // Output: undefined
  ```
  