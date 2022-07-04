var userInputs = [];
var userNumPressed = '';
var result = 0;
var operation, finalResult;

//create 0-9 numbers
//when button clicked get its value
for(i=0;i<10;i++){
    let btn = document.createElement("button");
    btn.id = 'btn' + i;
    btn.innerHTML = i;
    btn.classList.add('buttons');
    document.getElementsByClassName('grid-container')[0].appendChild(btn);
    let num = document.getElementById('btn' + i);
    num.addEventListener('click', function(){
        var numberClicked = Number(num.innerHTML);
        userInputs.push(numberClicked);
        getNumber(userInputs);
    })
}

//read user key press
//convert string to number

function getUserInput(){
    $("body").keydown(function(event){
        if(event.which > 47 && event.which < 58){
            var numberPressed = String.fromCharCode(event.which);
            let userInput = Number(numberPressed);
            //console.log(typeof(userInput));
            userInputs.push(userInput);
            getNumber(userInputs);
            userInputs = []; //maybe remove this line??
            //console.log(userInput);
        }
    });
}

getUserInput();

//CONCAT NUMBERS TO STRING AND THEN STRING TO NUM.
function getNumber(list){
    for(i=0;i<list.length;i++){
        userNumPressed += list[i] + ''; //adding space here lets us concat numbers cause it makes it a string
        list.pop();
    }
    userNumPressed = Number(userNumPressed);
    screen.value = userNumPressed;
}

//create screen
let screen = document.createElement('input');
screen.value = 0;
screen.id = 'screen';
screen.readOnly = true;
document.getElementsByClassName('grid-container')[0].appendChild(screen);

//- + * / = C

for(i=0; i < 8; i++){
    let operatorbutton = document.createElement("button");
    operatorbutton.id = 'operator' + i;
    operatorbutton.classList.add('operators');
    if (i == 0){
        operatorbutton.innerHTML = '=';
        operatorbutton.addEventListener('click', function(){
            equals(result,userNumPressed);
        })
    }
    if (i == 1){
        operatorbutton.innerHTML = '+';
        operatorbutton.addEventListener('click', function(){
            addition();
        })
    }
    if (i == 2){
        operatorbutton.innerHTML = '-';
        operatorbutton.addEventListener('click', function(){
            subtraction();
        })
    }
    if (i == 3){
        operatorbutton.innerHTML = 'x';
        operatorbutton.addEventListener('click', function(){
            multiply();
        })
    }
    if (i == 4){
        operatorbutton.innerHTML = '÷'
        operatorbutton.addEventListener('click', function(){
            division();
        })
    }
    if (i==5){
        operatorbutton.innerHTML = 'C';
        operatorbutton.addEventListener('click', function(){
            clear();
        })
    }
    if (i==6){
        operatorbutton.innerHTML = '√';
        operatorbutton.addEventListener('click',function(){
            squareRoot(userNumPressed);
        })
    }
    if (i==7){
        operatorbutton.innerHTML = '.';
        //ADD FUNCTION OF .
    }
    document.getElementsByClassName('grid-container')[0].appendChild(operatorbutton);
}

function clear(){
    screen.value = 0;
    result = 0;
    userNumPressed = 0;
    finalResult = undefined;
}

//throw some arrow functions
let squareRoot = number => {
    var squareRoot = Math.sqrt(number);
    screen.value = parseFloat(squareRoot.toFixed(3));
    finalResult = parseFloat(squareRoot.toFixed(3));
}

function continuousOperations(){
    if (finalResult == void(0)){
        result += userNumPressed;
    }else{
        result = finalResult;
    }
}

function addition(){
    continuousOperations();
    screen.value = '';
    userNumPressed = '';
    operation = 1;
}
function subtraction(){
    continuousOperations();
    screen.value = '';
    userNumPressed = '';
    operation = 2;
}
function multiply(){
    continuousOperations(); 
    screen.value = '';
    userNumPressed = '';
    operation = 3;
}
function division(){
    continuousOperations();
    screen.value = '';
    userNumPressed = '';
    operation = 4;
}


function equals(a,b){
    if (operation==1){
        screen.value = a + b;
        finalResult = a + b;
        
    }else if(operation==2){
        screen.value = a - b;
        finalResult = a - b;
        
    }else if(operation==3){
        screen.value = parseFloat((a*b).toFixed(3));
        finalResult = parseFloat((a*b).toFixed(3));
        
    }else if(operation==4){
        screen.value = parseFloat((a/b).toFixed(3)); //show 3 decimals if they are not 0
        finalResult = parseFloat((a/b).toFixed(3));
        
    }
    
}

//TODO
//ADD FUNCTION FOR .
//TRY CURRENCY API??


