class Array{
    constructor(){
        this.length=0;
        this.data=[];
    }
    push(ele){
        this.data[this.length]=ele;
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
}
const arr = new Array();
console.log(arr);
arr.push('23');
console.log(arr);
arr.push(45);
console.log(arr);
console.log(arr.get(0));
arr.pop();
console.log(arr);