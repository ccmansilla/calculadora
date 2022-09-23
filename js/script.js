/* display */
const display = document.getElementById("pantalla");

/* botones de teclado */
const teclado = document.querySelectorAll(".btnCalc");

/* memoria */
let memoria = 0;

console.log(teclado);

teclado.forEach(function(btn) {
    btn.addEventListener('click', function() {
        switch(btn.value) {
            case 'AC':
                display.innerHTML = '';
                break;
            case 'MR':
                display.innerHTML = memoria;
                break;
            case 'x²':
                display.innerHTML += 'Math.pow(';
                break;                
            case 'x³':
                display.innerHTML += 'Math.pow(';
                break;    
            case '√':
                display.innerHTML += 'Math.sqrt(';
                break;     
            case '√n':
                display.innerHTML += 'Math.sqrt(';
                break;         
            case 'sin':
                display.innerHTML += 'Math.sin(';
                break;
            case 'cos':
                display.innerHTML += 'Math.cos(';
                break;
            case 'tg':
                display.innerHTML += 'Math.tan(';
                break;
            case 'π':
                display.innerHTML += 'Math.PI ';
                break;
            case 'e':
                display.innerHTML += 'Math.E ';
                break;
            case 'ln':
                display.innerHTML += 'Math.log(';
                break;
            case 'log':
                display.innerHTML += 'Math.log10(';
                break;
            case 'x!':
                display.innerHTML += 'factorial(';
                break;
            case '=':
                try {
                    display.innerHTML = eval(display.innerHTML);
                } catch (error) {
                    display.innerHTML = "ERROR";
                }
                break;
            default:
                display.innerHTML += btn.value;
        }
    }
    ,false);
});

function factorial(n) {
    if (n > 1) {
        return n * factorial(n - 1);
    }
    return 1;
}