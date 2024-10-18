let expression = '';

function append(value) {
    expression += value;
    document.getElementById('result').value = expression;
}

function calculate() {
    try {
        expression = eval(expression);
        document.getElementById('result').value = expression;
    } catch {
        document.getElementById('result').value = 'Error';
    }
}

function clearAll() {
    expression = '';
    document.getElementById('result').value = '';
}
