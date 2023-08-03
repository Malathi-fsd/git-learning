let array=[1,2,3,4,5,6,7,8,9,10];

//anonymous function
let printOddNumbers=(array)=>{   
     console.log(array.filter(value=>value%2!=0).join(" "));        
}
printOddNumbers(array);   

//IIFE
((array)=>{
    console.log(array.filter(value=>value%2!=0).join(" "));
})(array);
