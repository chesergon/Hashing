// Hash table implementation in JavaScript

class HashTable {
    constructor() {
      this.table = {};
    }
  
    // Hash function to generate an index for the key
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash;
    }
  
    // Insert a key-value pair into the hash table
    insert(key, value) {
      const index = this.hash(key);
      this.table[index] = value;
    }
  
    // Retrieve a value from the hash table based on the key
    get(key) {
      const index = this.hash(key);
      return this.table[index];
    }
  
    // Remove a key-value pair from the hash table
    remove(key) {
      const index = this.hash(key);
      delete this.table[index];
    }
  
    // Check if a key exists in the hash table
    contains(key) {
      const index = this.hash(key);
      return this.table.hasOwnProperty(index);
    }
  }
  
  // Usage example
  const myHashTable = new HashTable();
  myHashTable.insert("apple", 10);
  myHashTable.insert("banana", 20);
  myHashTable.insert("orange", 30);
  
  console.log(myHashTable.get("apple")); // Output: 10
  console.log(myHashTable.get("banana")); // Output: 20
  console.log(myHashTable.get("orange")); // Output: 30
  console.log(myHashTable.contains("grape")); // Output: false
  
  myHashTable.remove("banana");
  console.log(myHashTable.get("banana")); // Output: undefined
