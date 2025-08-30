class Arrey {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(ele) {
    this.data[this.length] = ele;
    this.length++;
    return this.length;
  }

  get(index){
    return this.data[index];
  }

  pop(){
    const lastEle = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastEle;
  }

  // LAB: Print Array Method
  // Print Values of the object horizontally';
  // concat '[' and ']';
  // after every element concat ',';
}

const arr = new Arrey();
console.log(arr);
arr.push("25");
console.log(arr);
arr.push(45);
console.log(arr);
console.log(arr.get(0));
arr.pop();
console.log(arr);