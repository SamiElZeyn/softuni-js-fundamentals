function solve (num1, num2, operator){
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;

    let operations = [add, subtract, multiply, divide]
    let operation;

    switch (operator){
        case "add": operation = operations[0]; break;
        case "subtract": operation = operations[1]; break;
        case "multiply": operation = operations[2]; break;
        case "divide": operation = operations [3]; break;
    }

    console.log(operation(num1, num2));

}
solve (5, 3,'add')
solve (7, 1,'subtract')
solve (5, 10,'multiply')
solve (21, 3,'divide')