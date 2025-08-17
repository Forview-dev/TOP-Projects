const numpadNumberBtn = document.querySelectorAll(".key.number");
const numpadEqualBtn = document.querySelector(".key.equal");
const numpadClearBtn = document.querySelector(".key.clear");
const numpadOperatorBtn = document.querySelectorAll(".key.operator");
const numpadSpecialBtn = document.querySelector(".key.special");
const numpadPeriodBtn = document.querySelector(".key.period");
const screen = document.querySelector(".screen input");

let hist = [];
let operationData = {
    "firstnumber": null,
    "lastNumber": null,
    "lastOperator": null,
    "result": null
};

let clearOnFirstClick = false;

numpadNumberBtn.forEach((button) => button.addEventListener('click', () => {
    if(clearOnFirstClick) {
        clearScreen(screen);
        clearOnFirstClick = false;
    }
    screen.value += button.innerText;
}))

// clear the screen
numpadClearBtn.addEventListener(('click'), () => {
    clearScreen(screen);
    clearData(operationData);
    clearNumpad(numpadPeriodBtn);
});

numpadOperatorBtn.forEach((button) => button.addEventListener(('click'), () => {
    if(clearOnFirstClick) {
        clearScreen(screen)
        clearOnFirstClick = false;
    }

    operationData["lastOperator"] = button.innerText;

    clearNumpad(numpadPeriodBtn);
    handleInput(operationData);
}));

numpadEqualBtn.addEventListener('click', () => {
    clearNumpad(numpadPeriodBtn);
    handleInput(operationData);
});

// converts the inputed number to negative/positive
numpadSpecialBtn.addEventListener('click', () => {
    if(+screen.value !== 0) screen.value = screen.value * (-1);
});

numpadPeriodBtn.addEventListener('click', () => {
    numpadPeriodBtn.disabled = "true";
});

function operate(n, p, operator) {
    let result = 0;
    if(operator === "+") result = n + p;
    else if (operator === "x") result = n * p;
    else if (operator === "/") result = n / p;
    else if (operator === "-") result = n - p;

    console.log(`🚀 ~ ${n} ${operator} ${p} = ${result}`);

    operationData["result"] = result;
    showValue(screen, result);
}

function clearScreen(screen) {
    screen.value = "";
}

function clearData(data) {
    data["firstNumber"] = null;
    data["lastNumber"] = null;
    data["lastOperator"] = null;
    data["result"] = null;
}

function showValue(screen, val) {
    screen.value = val;
}

function handleInput(operationData) {

    if(operationData["firstNumber"] == null) {
        operationData["firstNumber"] = +screen.value;
        
        clearOnFirstClick = true;
    }
    else if(operationData["lastNumber"] == null) {
        operationData["lastNumber"] = +screen.value;
        
        operate(operationData["firstNumber"], operationData["lastNumber"], operationData["lastOperator"]);
    }
    else {
        operationData["firstNumber"] = operationData["result"];
        operationData["lastNumber"] = null;
        operationData["result"] = null;
        clearOnFirstClick = true;
    }

}

function clearNumpad(numpad) {
    numpad.disabled = false;
}