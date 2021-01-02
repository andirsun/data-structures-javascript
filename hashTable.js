/*
  hashtables or dictionary
  Example of key value hash-table
  {
    "anderson" : "value1",
    "carlos" : "value2"
  }
  in javascript are represented by array of sub-arrays -> example
  [
    ["anderson", "value1"],
    ["carlos", "value2"]
  ]
*/
class HashTable {

  constructor (size) {
    this.data = new Array(size);
  }

  hasMethod (key) {
    // Get the address of the key
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set (key, value) {
    const address = this.hasMethod (key);
    // If the address no exists, then create a array to set values
    if (!this.data[address]) {
      this.data[address] = [];
    }
    // Set the new items
    this.data[address].push ([key, value]);
    return this.data;
  }

  get (key) {
    const address = this.hasMethod (key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      // Loop in the array of sub-arrays
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] == key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  delete (key) { 
    const address = this.hasMethod (key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      // Loop in the array of sub-arrays
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] == key) {
          // delete the key value array
          delete currentBucket[i];
          return "deleted";
        }
      }
    }
    return "No exists";
  }

  getAllKeys () {
    let keys = [];
    this.data.forEach((item) => {
      item.forEach((tuple) => {
        keys.push(tuple[0]);
      })
    })
    if (keys.length == 0) {
      return "No Keys";
    }
    return keys;
  }
}

const myHashTable = new HashTable(50);