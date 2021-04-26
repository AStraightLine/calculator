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
    switch(operator) {
        case '+': 
            return addition(a, b);
        case '-':
            return subtraction(a, b);
        case '*':
            return multiplication(a, b);
        case '/': 
            return division(a, b);
        case '%':
            return percentOf(a);
        case "unary":
            return unaryOp(a);
    }
}

const display = document.querySelector('#calcDisplay');
const numberButtons = document.querySelectorAll('.numberButton');

const clearButton = document.querySelector('#clearButton');

let displayValue = 0;

display.textContent = displayValue;

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (displayValue == 0) {
            displayValue = button.value;
            display.textContent = displayValue;
        } else {
            displayValue += button.value;
            display.textContent = displayValue;
        }
    });
});

clearButton.addEventListener('click', () => {
    displayValue = 0;
    display.textContent = displayValue;
});