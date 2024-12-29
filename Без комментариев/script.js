let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['+', '-', 'x', ':'];

const outpute = document.querySelector('.summ div');

function clear() {
    let a = '';
    let b = '';
    let sign = '';
    let finish = false;
    outpute.textContent = 0;
};

document.querySelector('#ac').onclick = clear;

document.querySelector('.numbers').onclick = (event) =>{
    if (!event.target.classList.contains('number')) return;
    if (event.target.classList.contains('ac')) return;

    outpute.textContent = '0';

    const key = event.target.textContent

    if (digit.includes(key)) {
        if (b === "" && sign === "") {
            a += key;
            console.log(a, b, sign);
            outpute.textContent = a;
        } else if (a !== "" && b!== "" && finish) {
            b = key;
            finish = false;
            outpute.textContent = b
        } else {
            b += key;
            console.log(a, sign, b);
            outpute.textContent = b;
        };
    };
    
    if (action.includes(key)) {
        sign = key;
        console.log(sign);
        outpute.textContent = sign;
        return;
    };

    if (key === "=") {
        a = +a;
        b = +b;
        switch(sign) {
            case "+":
                a = a + b;
                break
            case "-":
                a = a - b;
                break;
            case "x":
                a = a * b;
                break;
            case ":":
                if (a === 0 || b === 0) {
                    outpute.textContent = "Ошибка"
                    let a = '';
                    let b = ''; 
                    let sign = '';
                    return;
                };
                a = a / b;
                break
        };
        finish = true;
        outpute.textContent = a;
        console.log(a);

    }
};