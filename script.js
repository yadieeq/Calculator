const inpNum = document.querySelector(".num")

const btnPlus = document.querySelector(".btn-plus")
const btnMinus = document.querySelector(".btn-minus")
const btnMultiply = document.querySelector(".btn-multiply")
const btnDivide = document.querySelector(".btn-divide")
const btnEquals = document.querySelector(".btn-equals")
const btnClear = document.querySelector(".btn-clear")
const out = document.querySelector(".out")

const inputNumBtns = document.querySelectorAll(".but-val")

let num1 = 0
let num2 = 0
let operation = ''
let result = 0

window.onload = function () {
    inpNum.focus()
}

btnPlus.onclick = function (){
    num1 = +inpNum.value
    operation = '+'
    inpNum.value = ''
    out.innerHTML += '<br>' + num1 + ' + '
    inpNum.focus()
    
}

btnMinus.onclick = function (){
    num1 = +inpNum.value
    operation = '-'
    inpNum.value = ''
    out.innerHTML += '<br>' + num1 + ' - ' 
    inpNum.focus()
}

btnMultiply.onclick = function (){
    num1 = +inpNum.value
    operation = '*'
    inpNum.value = ''
    out.innerHTML += '<br>' + num1 + ' x ' 
    inpNum.focus()
}

btnDivide.onclick = function (){
    num1 = +inpNum.value
    operation = '/'
    inpNum.value = ''
    out.innerHTML += '<br>' + num1 + ' ÷ '
    inpNum.focus()
}

btnClear.onclick = function (){
    num1 = 0
    num2 = 0
    result = 0
    out.textContent = ''
    inpNum.value = 0
}

inputNumBtns.forEach(btn => {
        btn.onclick = () => {
        inpNum.value += btn.textContent // добавляем цифру в конец
        inpNum.focus() // оставляем курсор в инпуте
    }
})

btnEquals.onclick = function (){
    num2 = +inpNum.value
    
    switch(operation) {
        case '+' : result = num1 + num2; break;
        case '-' : result = num1 - num2; break;
        case '*' : result = num1 * num2; break;
        case '/' :
            if (num2 === 0) {
                out.innerHTML += ' ' + num2 + ' = Impossible';
                inpNum.value = 0;
            } else {
                result = num1 / num2;
                out.innerHTML += ' ' + num2 + ' = ' + result;
                inpNum.value = result;
            }
        break;
    }

    out.innerHTML += ' ' + num2 + ' = ' + result; inpNum.value = result
    inpNum.focus()
}




