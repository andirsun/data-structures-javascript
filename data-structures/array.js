// Own implementation of an array as class
class MyArray {
  constructor () {
    this.length = 0;
    this.data = {};
  }
  // get an element of index given
  get (index) {
    return this.data[index];
  }
  // Add item at the end of the array object
  push (item) {
    this.data[this.length] = item;
    this.length++;
  }
  // Pop implementation -- delete the last element
  pop ( ) {
    let data = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return data;
  }
  // Shift implementation -- delete the first element
  shift () {
    delete this.data[0];
    this.length--;
  }
  //Unshift add an object at the begining of array-object
  unshift (item) {
    // i = this.length couse need to desboard to the next index
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
    this.length++;
    return this.data;
  }
  // Delete
  delete (index) {
    const item = this.data[index];
    this.shiftIntex(index);
    // Return deleted element
    return item;
  }
  // Shift Index  Ajust index after delete some element
  shiftIntex (index) {
    for (let i = index; i < this.length-1; i++) { 
      //example [1,2,3] shiftIndex(1) -> [1,3]
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length-1];
    this.length--;
  }
  
}

const myarray = new MyArray();


