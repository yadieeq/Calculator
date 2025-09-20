// Selectors
const inpNum = document.querySelector(".num")
const inputNumBtns = document.querySelectorAll(".but-val")
const out = document.querySelector(".out")

const btnPlus = document.querySelector(".btn-plus")
const btnMinus = document.querySelector(".btn-minus")
const btnMultiply = document.querySelector(".btn-multiply")
const btnDivide = document.querySelector(".btn-divide")
const btnEquals = document.querySelector(".btn-equals")
const btnClear = document.querySelector(".btn-clear")

// Creating variables
let num1 = 0
let num2 = 0
let operation = ''
let result = 0

// Logical
const setOperation = (op, symbol) => {
    num1 = +inpNum.value;
    operation = op;
    inpNum.value = '';;
    inpNum.focus();
}
const disableBtn = () => {
    btnPlus.disabled = true
    btnMinus.disabled = true
    btnMultiply.disabled = true
    btnDivide.disabled = true
}

const changeActiveBtn = (is) => {
    btnPlus.disabled = is
    btnMinus.disabled = is
    btnMultiply.disabled = is
    btnDivide.disabled = is
}

const disableEquals = () => {
    btnEquals.disabled = true
}

const enableEquals = () => {
    if (operation !== '') btnEquals.disabled = false
}

// Events
inputNumBtns.forEach(btn => {
    btn.onclick = () => {
        inpNum.value += btn.textContent
        inpNum.focus()
        enableEquals()
    }
})

btnPlus.onclick = () => {
    setOperation('+', '+');
    disableBtn()
}
btnMinus.onclick = () => {
    setOperation('-', '-');
    disableBtn()

}
btnMultiply.onclick = () => {
    setOperation('*', 'x');
    disableBtn()

}
btnDivide.onclick = () => {
    setOperation('/', '÷');
    disableBtn()

}

const equalsFunc = () => {
    num2 = +inpNum.value
    let visualOperation = ''

    switch (operation) {
        case '+':
            result = num1 + num2;
            visualOperation = '+';
            break;
        case '-':
            result = num1 - num2;
            visualOperation = '-';
            break;
        case '*':
            result = num1 * num2;
            visualOperation = 'x';
            break;
        case '/':
            result = num1 / num2;
            visualOperation = '÷';

            break;
    }

    if (num2 === 0 && operation === '/') out.innerHTML += 'Impossible <br>';
    else {

        inpNum.value = 0;
        out.innerHTML += num1 + ' ' + ' ' + visualOperation + ' ' + num2 + ' = ' + +result.toFixed(4) + ' <br>';
        inpNum.value = +result.toFixed(4)
        inpNum.focus()

        changeActiveBtn(false)
        disableEquals()
        operation = ''
    }
}


btnEquals.onclick = equalsFunc


btnClear.onclick = function () {
    num1 = 0
    num2 = 0
    result = 0
    out.textContent = ''
    inpNum.value = ' '
    inpNum.focus()
    changeActiveBtn(false)
    disableEquals()
}

const checkInput = (key) => {
    return ["+", "-", "*", "/"].includes(key)
}

const checkOperatorIndex = (value, key) => {
    return value.indexOf(key)
}

inpNum.onkeyup = (e) => {
    if (checkInput(e.key)) {
        const index = checkOperatorIndex(inpNum.value, e.key);

        num1 = +inpNum.value.slice(0, index)
        operation = e.key

        // console.log("Индекс знака:", index, "num1", num1, operation)
        inpNum.value = ''
        disableBtn()


    }
    if (e.key === "Enter") {
        if (operation !== '') equalsFunc()
    }
}

inpNum.oninput = () => {
    enableEquals()
}

//Start
window.onload = () => {
    inpNum.focus()
}