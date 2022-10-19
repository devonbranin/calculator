function add (a,b) {
   return +a + +b;
}

function subtract (a,b) {
   return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a,b) {
    return a / b;
}

function operate (val,a,b) {
    if (val === 'plus') {
        result = add(a,b);
    }
    if (val === 'minus') {
        result = subtract(a,b);
    }
    if (val === 'splat') {
       result = multiply(a,b);
    } 
    if (val === 'slash') {
       result = divide(a,b);
    }
    return result;
}   