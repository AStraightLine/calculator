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
