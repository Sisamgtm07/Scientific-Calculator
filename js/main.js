//Only displays given input 
function myclick(a){
    calculator.display.value += a;
}

//Evualte arithmetic operation
function equalto(){
    calculator.display.value = eval(calculator.display.value);
}

//Function for all CLear
function ac(){
    calculator.display.value = "";
}

//DEL function
function backspace(){
    var prevalue = calculator.display.value;
    calculator.display.value = prevalue.substr(0,prevalue.length-1);
}


//Trignomertic Oerations
function fnsin(){
    calculator.display.value = Math.sin(calculator.display.value);
}

function fncos(){
    calculator.display.value = Math.cos(calculator.display.value);
}

function fntan(){
    calculator.display.value = Math.tan(calculator.display.value);
}


//Logarithmic function: base 10
function fnlog(){
    calculator.display.value = Math.log(calculator.display.value) / Math.log(10) ;
}

//Arithmetic operation: sqaure, square root, cube , cube root, power, percentage
function square(){
    calculator.display.value = Math.pow(calculator.display.value,2);
}
function cube(){
    calculator.display.value = Math.pow(calculator.display.value,3);
}
function squarert(){
    calculator.display.value = Math.pow(calculator.display.value,1/2);
}
function cubert(){
    calculator.display.value = Math.pow(calculator.display.value,1/3);
}
function tenpow(){
    calculator.display.value= Math.pow(10,calculator.display.value)
}
function percentage(){
    calculator.display.value = (calculator.display.value/100);
    
}

//Exponential function
function exp(){
    calculator.display.value = Math.exp(calculator.display.value);
}

//Absolute value function
function abs(){
    calculator.display.value = Math.abs(calculator.display.value);
}

//git EvaluateFactorial
function facto(){
    var i, no, fact;
    fact=1;
    no=calculator.display.value;
    for(i=1; i<=no; i++)  
        {
            fact= fact*i;
        }  
    calculator.display.value = fact;
}
