function addition(a, b) {
    let sum = a + b;
    return sum;
}

function subtraction(a, b) {
    let difference = a - b;
    return difference;
}

function multiplication(a, b) {
    let product = a * b;
    return product;
}

function division(a, b) {
    if (b == 0) {
        return "Don't";
    } else {
        let quotient = a / b;
        return quotient;
    } 
}

function percentOf(x) {
    if (x == 0) {
        return x;
    } else {
        let cent = x / 100;
        return cent;
    }
}

function unaryOp(x) {
    if (x < 0) {
        return Math.abs(x);
    } else if (x > 0) {
        return -Math.abs(x);
    } else if (x == 0) {
        return x;
    }
}

function operate(a, operator, b) {
    a = parseFloat(a);
    b = parseFloat(b);

    let result = 0;

    switch(operator) {
        case '+': 
            result = addition(a, b);
            result = result.toString();
            return result;
        case '-':
            result = subtraction(a, b);
            result = result.toString();
            return result;
        case '*':
            result = multiplication(a, b);
            result = result.toString();
            return result;
        case '/': 
            result = division(a, b);
            result = result.toString();
            return result;
        case '%':
            result = percentOf(a);
            result = result.toString();
            return result;
        case "unary":
            result = unaryOp(a);
            result = result.toString();
            return result;
        case ".": 
            result = displayValue += '.';
            result = result.toString();
            return result;
    }
}

const display = document.querySelector('#calcDisplay');
const numberButtons = document.querySelectorAll('.numberButton');
const operatorButtons = document.querySelectorAll('.operatorButton');
const clearButton = document.querySelector('#clearButton');

let displayValue = 0;
let operator = '';
let operandA = 0;

display.textContent = displayValue;

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (displayValue == '0') {
            displayValue = button.value;
            display.textContent = displayValue;
        } else {
            displayValue += button.value;
            display.textContent = displayValue;
        }
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.value !== '=' && button.value !== '%' && button.value !== 'unary' && button.value !== '.') {
            operator = button.value;
        }
        if (button.value == '%' || button.value == 'unary' || button.value == '.') {
            displayValue = operate(displayValue, button.value);
            display.textContent = displayValue;
        } else if (button.value == '=') {
            displayValue = operate(operandA, operator, displayValue);
            display.textContent = displayValue;
        } else {
            operandA = displayValue;
            displayValue = 0;
        }
    });
});

clearButton.addEventListener('click', () => {
    displayValue = 0;
    operator = '';
    operandA = 0;
    display.textContent = displayValue;
});