let a = '';         //Первое число
let b = '';         //Второе число
let sign = '';      //Знак(+, =, и т.д.)
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['+', '-', 'x', ':'];

const outpute = document.querySelector('.summ div');

//Функция которая очищает все числа и знаки
function clear() {
    let a = '';      //Первое число
    let b = '';      //Второе число
    let sign = '';   //Знак(+, =, и т.д.)
    let finish = false;
    outpute.textContent = 0;
};

//Кнопка с ID - ac выполняет функцию clear
document.querySelector('#ac').onclick = clear;

document.querySelector('.numbers').onclick = (event) =>{
    //Дословно: "Если нажатый объект не умиеет класса num_button, но ничено не происходит"
    //Это нужно чтобы если пользователь нажал в область между кнопками, ничего не произошло
    if (!event.target.classList.contains('number')) return;
    //Пока сам не знаю что
    if (event.target.classList.contains('ac')) return;

    //Значение которое выводится на экран
    outpute.textContent = '0';

    //Значение нажатой кнопки
    const key = event.target.textContent

    //Дословно: "Если значение нажатой кнопки совпадают с значением из массива digit, то процесс продолжится"
    if (digit.includes(key)) {
        //Дословно: "Если переменные и второго значения, и знака пусты, заполняется первое значение"
        if (b === "" && sign === "") {
            a += key;
            console.log(a, b, sign);
            outpute.textContent = a;        //На экран выводится первое значение
        }
        //Дословно: "Если первое и второе значение не заполненны, а finish = true, то выводится второе значение"
        //Это нужно чтобы калькулятор считал больше двух значений
        //Зачем нужен finish объясню в конце кода
        else if (a !== "" && b!== "" && finish) {
            b = key;
            finish = false;
            outpute.textContent = b
        } 
        //Так как переменные первого значения, и переменные знака заполнились, идёт заполнение второго значения
        else {
            b += key;
            console.log(a, sign, b);
            outpute.textContent = b;
        };
    };
    
    //Дословно: "Если значение нажатой кнопки совпадают с значением из массива action, то процесс продолжится "
    if (action.includes(key)) {
        sign = key;
        console.log(sign);
        outpute.textContent = sign;
        return;
    };

    //Дословно: "Если значение нажатой кнопки будет '=', то..."
    if (key === "=") {
        //Делаем из переменных integer, так как в массиве они находятся в значении string
        a = +a;
        b = +b;
        //Функция switch принимает значение из скобок, и в зависимости от значения производится функция case
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
                //При попытке поделить на ноль, выходит ошибка, и все значения обнуляются
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
        //Обьяснение зачем нужен finish в конце
        finish = true;
        outpute.textContent = a;
        console.log(a);

    }
};







//Изначально finish = false, когда мы нажимаем кнопку "=", finish меняет значение на true, после этого
//автомотичести произветётся функция if которая вернёт finihs значение false, и так будет продолжатся
//пока вычесления не закончатся