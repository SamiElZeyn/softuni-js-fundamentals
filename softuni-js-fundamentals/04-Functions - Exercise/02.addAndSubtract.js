function addAndSubtract (num1, num2, num3){

    let result1 = sum(num1, num2)
    let finalResult = subtract(result1, num3)

    function sum (num1, num2) {
        return num1 + num2;
    }
    function subtract (num1, num2){
        return num1 - num2
    }
    console.log(finalResult);
}
addAndSubtract (23, 6, 10)