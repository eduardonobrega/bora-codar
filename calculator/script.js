const resultDisplay = document.querySelector('.result > span');
const operationDisplay = document.querySelector('.operationDisplay');

const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const equals = document.querySelector('#equals');

let operation = '';
let number1 = 0;
let number2 = 0;

function result() {
  let res;
  switch (operation) {
    case '+':
      res = number1 + number2;
      break;
    case '-':
      res = number1 - number2;
      break;
    case '*':
      res = number1 * number2;
      break;
    case '/':
      res = number1 / number2;
      break;
  }
  console.log(res)
}

equals.addEventListener('click', result);

numbers.forEach((n) => {
  n.addEventListener('click', () => {
    const number = n.textContent;

    if (resultDisplay.textContent == '0') {
      resultDisplay.textContent = '';
    }

    resultDisplay.textContent += number;
  });
});

operations.forEach((op) => {
  op.addEventListener('click', () => {
    operation = op.id;
    number1 = resultDisplay.textContent;
    operationDisplay.textContent = resultDisplay.textContent + operation;
  });
});
