let numbers=[2,4,5,6,3];
let sum=0;

//anonymous function
let sumof=(numbers)=>{
    for(let i=0;i<numbers.length;i++){
        sum=sum+numbers[i];
    }
    console.log(sum);
}
sumof(numbers);

//IIFE
((numbers)=>{
    for(let i=0;i<numbers.length;i++){
        sum=sum+numbers[i];
    }
    console.log(sum);
})(numbers);