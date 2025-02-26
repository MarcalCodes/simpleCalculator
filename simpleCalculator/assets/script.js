// function for my simple calculator 

const setResult = (result) => {
    const elem = document.getElementById("resultElement"); // here is always selecting the same element in the page bc will always put the result in this element
    elem.textContent = result
}

// const getNumber1 = () => {
//     const elem = document.getElementById("number1"); 
//     return Number(elem.value)
// }

// const getNumber2 = () => {
//     const elem = document.getElementById("number2"); 
//     return Number(elem.value)
// }

//const getNumber1 = () => getNumber("number1")
//const getNumber2 = () => getNumber("number2")

const getNumber = (inputId) => {
    const elem = document.getElementById(inputId); 
    return Number(elem.value)
}


const calculator = (number1, number2, operator) => {
    if (operator === "+"){
        return number1 + number2
    }

    if (operator === "-"){
        return number1 - number2
    }
       
    if (operator === "*"){
        return number1 * number2
    }
       
    if (operator === "/"){
        return number1 / number2
    }
}

console.log(calculator(1, 2, "+"))
console.log(calculator(1, 2, "-"))
console.log(calculator(1, 2, "*"))
console.log(calculator(1, 2, "/"))
console.log(calculator(1.1, 2, "+"))
console.log(calculator(1.1, 2.2, "+"))
console.log(calculator(1.1, 2, "-"))
console.log(calculator(1.1, 2.2, "-"))
console.log(calculator(1.1, 2, "*"))
console.log(calculator(1.1, 2.2, "*"))
console.log(calculator(1.1, 2, "/"))
console.log(calculator(1.1, 2.2, "/"))
console.log(calculator(1, 0, "/")) // dividing by 0 returns "Infinity" value
console.log(calculator(4, 6, "+"))
console.log(calculator(4, 6, "-"))
console.log(calculator(4, 6, "*"))
console.log(calculator(4, 6, "/"))
