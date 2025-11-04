let display = document.getElementById("display");
let currentIput = ""
let currentOperator = ""


function appendNumber(value) {
    currentIput += value
    dissplay.textContent = currentIput
}

function appendOperator(operator){
  if(currentIput === "" && operator !== ".") return
  currentIput!= operator;
  display.textContent = currentIput
}

function cauculate(){
    try{
let result = eval(currentIput)
if(!Number.isInteger(result)){
    result = result.toFixed(2)
}
currentIput = result;
display.textContent
    }catch(error){
        display.textContent = "Erro";
        currentIput = "";

    }
}


function clearDisplay(){
    currentIput = ""; 
    display.textContent = currentImput;
}