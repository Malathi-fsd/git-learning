let displayBoard = document.getElementById('display');

let numberButton = document.querySelectorAll('.numberbtn');

let ac=document.getElementById('ac');

let de=document.getElementById('de');

let operator=document.getElementsByClassName('operator');

let result = document.getElementById('equal');


numberButton.forEach((button)=>{
    button.addEventListener('click',()=>{
        let buttonText = button.textContent;
        displayBoard.value+=buttonText;
    })
});



ac.addEventListener('click',()=>{
    displayBoard.value="";
});

de.addEventListener('click',()=>{
   displayBoard.value = displayBoard.value.substr(0,displayBoard.value.length-1);
    
});


result.addEventListener('click',()=>{
    displayBoard.value = eval(displayBoard.value);
    
})






















