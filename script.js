const display=document.getElementById("display");

function addNumber(num) {
    display.value += num;
}

function addOperator(operator) {
    const lastChar = display.value.slice(-1);
    if (!isNaN(lastChar)&&display.value !=="") {
        display.value += operator;
    }
}

function addDecimal() {
    const currentExpression=display.value;
    const lastOperatorIndex = Math.max(
        currentExpression.lastIndexOf('+'),
        currentExpression.lastIndexOf('-'),
        currentExpression.lastIndexOf('*'),
        currentExpression.lastIndexOf('/')
    );
    const lastNumber =currentExpression.slice(lastOperatorIndex +1);
    if (!lastNumber.includes('.')) {
        display.value += '.';
    }
}

function calculateResult() {
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculatePercentage() {
    try{
        const result = eval(display.value);
        display.value = (result/100) * 100;
    }
    catch(error){
        display.value = "Error";
    }
}