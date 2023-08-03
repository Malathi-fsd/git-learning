// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});
class Stack{
    constructor(){
        this.items=[];
        this.top=-1;
    }
    push(data){
    this.items.push(data);
    this.top++;
    }
    pop(){
        this.items.pop();
        this.top--;
    }
    peek(){
        return this.items[this.top];

    }
    isEmpty(){
        return this.top==-1;
    }
}
inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  let str=userInput[0].split(' ');

  let stack=new Stack();
    let arr=[];
  for(let i=0;i<str.length;i++){
    stack.push(str[i]);
  }
  for(let j=0;j<stack.length;j++){
    stack.pop();
  }

  console.log(stack);
  

    //end-here
});