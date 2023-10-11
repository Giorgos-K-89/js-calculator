const numberButton = document.querySelectorAll(".number");
const operationButton = document.querySelectorAll(".operation");
const equalsButton = document.querySelector(".equals");
const deleteButton = document.querySelector(".delete");
const allClearButton = document.querySelector(".ac");
const clearButton = document.querySelector(".clear");
const sideScreen = document.querySelector(".side-output");
const mainScreen = document.querySelector(".main-output");
const percentageButton = document.querySelector(".percentage");
const rizaxButton = document.querySelector(".rizax");
const x2Button = document.querySelector(".x2");
const reverseButton = document.querySelector(".reverse");
const fractionButton = document.querySelector(".fraction");

var calculator = {
  previousInput: "",
  currentInput: "",
  previousNumber: "",
  previousOperation: "",
  operation: "",
};

calculator.allClear = function () {
  mainScreen.textContent = "0";
  sideScreen.textContent = "";
  this.currentInput = "";
  this.previousInput = "";
  this.operation = "";
};

calculator.clear = function () {
  mainScreen.textContent = "0";
  this.currentInput = "";
};
//
//
calculator.del = function () {
  this.currentInput = this.currentInput.slice(0, -1);
};
//
//
calculator.calculate = function () {
  let calculation;
  const num1 = parseFloat(this.previousInput);
  const num2 = parseFloat(this.currentInput);
  switch (this.operation) {
    case "+":
      calculation = num1 + num2;
      break;
    case "-":
      calculation = num1 - num2;
      break;
    case "x":
      calculation = num1 * num2;
      break;
    case "/":
      calculation = num1 / num2;
      break;
    default:
      return;
  }
  this.currentInput = calculation;
  this.operation = "";
  this.previousInput = "";
};
//
//
calculator.getOperation = function (operation) {
  if (this.currentInput === "") return;
  if (this.previousInput !== "") {
    this.calculate();
  }
  this.operation = operation;
  this.previousInput = this.currentInput;
  this.currentInput = "";
};

calculator.getNumber = function (number) {
  if (number === "." && this.currentInput.includes(".")) return;
  return (this.currentInput = this.currentInput + number);
};
//
//
calculator.mainScreenDisplay = function () {
  if (this.currentInput === "") {
    mainScreen.textContent = "0";
  } else mainScreen.textContent = this.currentInput;
  sideScreen.textContent = this.previousInput + this.operation;
};
//
//buttons listening
for (i = 0; i < numberButton.length; i++) {
  numberButton[i].addEventListener("click", function (button) {
    if (mainScreen.textContent === "0" && button.target.textContent === "0") {
      return;
    } else {
      calculator.getNumber(button.target.textContent);
      calculator.mainScreenDisplay();
    }
  });
}
//
//operations listening
for (i = 0; i < operationButton.length; i++) {
  operationButton[i].addEventListener("click", function (button) {
    calculator.getOperation(button.target.textContent);
    calculator.mainScreenDisplay();
  });
}

allClearButton.addEventListener("click", function () {
  calculator.allClear();
  calculator.mainScreenDisplay();
});

deleteButton.addEventListener("click", function () {
  calculator.del();
  calculator.mainScreenDisplay();
});

clearButton.addEventListener("click", function () {
  calculator.clear();
  calculator.mainScreenDisplay();
});

percentageButton.addEventListener("click", function () {
  calculator.percentage();
  calculator.mainScreenDisplay();
});
//
equalsButton.addEventListener("click", (button) => {
  calculator.calculate();
  calculator.mainScreenDisplay();
});
//
x2Button.addEventListener("click", function () {
  calculator.x2();
  calculator.mainScreenDisplay();
});
//
rizaxButton.addEventListener("click", function () {
  calculator.rizax();
  calculator.mainScreenDisplay();
});
//
reverseButton.addEventListener("click", function () {
  calculator.reverse();
  calculator.mainScreenDisplay();
});
//
fractionButton.addEventListener("click", function () {
  calculator.fraction();
  calculator.mainScreenDisplay();
});
//
calculator.fraction = function () {
  this.currentInput = 1 / this.currentInput;
};
//
calculator.reverse = function () {
  this.currentInput = this.currentInput * -1;
};
//
calculator.percentage = function () {
  if (this.previousInput === "") {
    return;
  } else {
    this.currentInput = (this.currentInput * this.previousInput) / 100;
    calculator.mainScreenDisplay();
  }
};
//
calculator.x2 = function () {
  this.currentInput = this.currentInput * this.currentInput;
  calculator.mainScreenDisplay();
};
//
calculator.rizax = function () {
  this.currentInput = Math.sqrt(this.currentInput);
};
