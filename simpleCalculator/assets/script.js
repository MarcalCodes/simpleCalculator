
// bellow are different ways to write my function

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




const setResult = (resultElementId, result) => {
  const elem = document.getElementById(resultElementId); // here is always selecting the same element in the page bc will always put the result in this element
  elem.textContent = result;
};

const getNumber = (inputId) => {
  const elem = document.getElementById(inputId);
  return Number(elem.value); // this is the way to to transfor a string into a number otherwise will concatenate
};


const getDropdownValue = (dropdownId) => {
  // the paramenter (dropdownId) here could be any, but we need to create a name that help to understand what it is about.
  const elem = document.getElementById(dropdownId); //
  return elem.value;
};

const calculator = (number1, number2, operator) => {
  if (operator === "+") {
    return number1 + number2;
  }

  if (operator === "-") {
    return number1 - number2;
  }

  if (operator === "*") {
    return number1 * number2;
  }

  if (operator === "/") {
    return number1 / number2;
  }
};

const doCalculation = (inputId1, inputId2, dropdownId) => {
  const number1 = getNumber(inputId1);
  const number2 = getNumber(inputId2);
  const operator = getDropdownValue(dropdownId);
  const result = calculator(number1, number2, operator);
  return result;
};

// here we got inspired by Scott's code - which he shared in the group 
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (key === "Escape") {
    setResult("resultElement", "");
    return;
  }
  if (key === "Enter" || key === "=") {
    document.getElementById("calculateButton").click();
    return;
  }
});

console.log(calculator(1, 2, "+"));
console.log(calculator(1, 2, "-"));
console.log(calculator(1, 2, "*"));
console.log(calculator(1, 2, "/"));
console.log(calculator(1.1, 2, "+"));
console.log(calculator(1.1, 2.2, "+"));
console.log(calculator(1.1, 2, "-"));
console.log(calculator(1.1, 2.2, "-"));
console.log(calculator(1.1, 2, "*"));
console.log(calculator(1.1, 2.2, "*"));
console.log(calculator(1.1, 2, "/"));
console.log(calculator(1.1, 2.2, "/"));
console.log(calculator(1, 0, "/")); // dividing by 0 returns "Infinity" value
console.log(calculator(4, 6, "+"));
console.log(calculator(4, 6, "-"));
console.log(calculator(4, 6, "*"));
console.log(calculator(4, 6, "/"));
