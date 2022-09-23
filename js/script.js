/* display */
const display = document.getElementById("resultado");
const funciones = document.getElementById("funciones");

/* botones de teclado */
const teclado = document.querySelectorAll(".btnCalc");

/* memoria */
let memoria = 0;

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
                funciones.innerHTML += ',2)';
                break;                
            case 'x³':
                display.innerHTML += 'Math.pow(';
                funciones.innerHTML += ',3)';
                break;   
            case 'xⁿ':
                funciones.innerHTML = ',' + display.innerHTML + ')';
                display.innerHTML = 'Math.pow(';
                break;  
            case '√':
                display.innerHTML += 'Math.sqrt(';
                funciones.innerHTML += ')';
                break;     
            case '√n':
                funciones.innerHTML = ',' + display.innerHTML + ')';
                display.innerHTML = 'Math.sqrt(';
                break;         
            case 'sin':
                display.innerHTML += 'Math.sin(';
                funciones.innerHTML += ')';
                break;
            case 'cos':
                display.innerHTML += 'Math.cos(';
                funciones.innerHTML += ')';
                break;
            case 'tg':
                display.innerHTML += 'Math.tan(';
                funciones.innerHTML += ')';
                break;
            case 'π':
                display.innerHTML += 'Math.PI ';
                break;
            case 'e':
                display.innerHTML += 'Math.E ';
                break;
            case 'ln':
                display.innerHTML += 'Math.log(';
                funciones.innerHTML += ')';
                break;
            case 'log':
                display.innerHTML += 'Math.log10(';
                funciones.innerHTML += ')';
                break;
            case 'x!':
                display.innerHTML += 'factorial(';
                funciones.innerHTML += ')';
                break;
            case '=':
                try {
                    display.innerHTML = eval(display.innerHTML + funciones.innerHTML);
                } catch (error) {
                    display.innerHTML = "ERROR";
                }
                funciones.innerHTML = '';
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