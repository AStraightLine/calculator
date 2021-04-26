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

    let result = '';

    switch(operator) {
        case '+': 
            result = addition(a, b);
            result = result.toString();
            break;
        case '-':
            result = subtraction(a, b);
            result = result.toString();
            break;
        case '*':
            result = multiplication(a, b);
            result = result.toString();
            break;
        case '/': 
            result = division(a, b);
            result = result.toString();
            break;
        case '%':
            result = percentOf(a);
            result = result.toString();
            break;
        case "unary":
            result = unaryOp(a);
            result = result.toString();
            break;

        case ".": 
            result = displayValue += '.';
            result = result.toString();
            break;
    }

    if ((((parseInt(result)).toString()).length) >= 11) {
        return "NaN";
    } else if (result.length >= 11) {
        let resultString = result.toString();
        let resultArray = resultString.split('');
        while (resultArray.length > 11) {
            if (resultArray[(resultArray.length - 1)] >= 5) {
                console.log(resultArray[(resultArray.length - 1)])
                resultArray[(resultArray.length - 1)] = Math.round(resultArray[(resultArray.length - 1)]);
                resultArray.pop();
            } else {
                resultArray.pop();
            }
        }
        result = resultArray.join('');
        return result;
    } else {
        return result;
    } 
}

const display = document.querySelector('#calcDisplay');
const numberButtons = document.querySelectorAll('.numberButton');
const operatorButtons = document.querySelectorAll('.operatorButton');
const clearButton = document.querySelector('#clearButton');

let displayValue = 0;
let operator = '';
let lastOperator = '';
let operandA = 0;
let operandB = 0;
let result = 0;

display.textContent = displayValue;

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if ((displayValue.length) == 11) {
            return;
        } else {
            if (displayValue == '0') {
                displayValue = button.value;
                display.textContent = displayValue;
            } else {
                displayValue += button.value;
                display.textContent = displayValue;
            }
        }
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.value !== '=' && button.value !== '%' && button.value !== 'unary' && button.value !== '.') {
            operator = button.value;
        }
        if (button.value == '%' || button.value == 'unary' || button.value == '.') {
            if (displayValue.includes('.')) {
                return;
            } 
            displayValue = operate(displayValue, button.value);
            display.textContent = displayValue;
        } else if (button.value == '=') {
            if (button.value == '=' && lastOperator == '' && displayValue == 0 && operandA == 0 && operandB == 0) {
                return;
            } else {
                operandB = displayValue;
            result = operate(operandA, operator, operandB);
            display.textContent = result;
            operandB = result;
            displayValue = 0;
            lastOperator = '=';
            }
        } else {
            if (lastOperator === '') {
                if (operator === '*' || operator === '/') {
                    lastOperator = operator;
                    operandA = displayValue;
                    operandB = displayValue;
                    displayValue = 0;
                } else {
                    lastOperator = operator;
                    operandB = displayValue;
                    result = operate(operandB, lastOperator, operandA);
                    display.textContent = result;
                    operandA = result;
                    displayValue = 0;
                }
            } else if (lastOperator === '=') {
                operandA = result;
                lastOperator = operator;
                operandB = displayValue;
                displayValue = 0;
            } else {
                operandB = displayValue;
                result = operate(operandA, lastOperator, operandB);
                display.textContent = result;
                lastOperator = operator;
                operandA = result;
                displayValue = 0;
            }
        }
    });
});

clearButton.addEventListener('click', () => {
    displayValue = 0;
    operator = '';
    lastOperator = '';
    operandA = 0;
    operandB = 0;
    result = 0;
    display.textContent = displayValue;
});