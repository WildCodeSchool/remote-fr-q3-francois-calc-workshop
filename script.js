const firstValue = document.querySelector("#first-value").value;
const operator = document.querySelector("#operator").value;
const secondValue = document.querySelector("#second-value").value;

console.log(firstValue);
console.log(operator);
console.log(secondValue);

function getResult(firstValue, operator, secondValue) {
    switch (operator) {
        case "+":
            return parseInt(firstValue) + parseInt(secondValue);
        case "-":
            return parseInt(firstValue) - parseInt(secondValue);
        case "/":
            return parseInt(firstValue) / parseInt(secondValue);
        case "*":
            return parseInt(firstValue) * parseInt(secondValue);
        default :
            return "Invalid Operator";
    }
}
console.log(getResult(firstValue, operator, secondValue));