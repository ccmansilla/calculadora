/* display */
const display = document.getElementById("resultado");

/* acumulador de funciones */
const funciones = document.getElementById("funciones");

/* botones de teclado */
const teclado = document.querySelectorAll(".btnCalc");

/* memoria */
let memoria = 0;

/* constantes matematicas */
const e = Math.E;
const π = Math.PI;

teclado.forEach(function(btn) {
    btn.addEventListener('click', function() {
        switch(btn.value) {
            case 'AC':
                display.innerHTML = '';
                funciones.innerHTML = '';
                break;
            case 'MR':
                display.innerHTML = memoria;
                break;
            case 'x²':
                display.innerHTML += 'potencia(';
                funciones.innerHTML += ',2)';
                break;                
            case 'x³':
                display.innerHTML += 'potencia(';
                funciones.innerHTML += ',3)';
                break;   
            case 'xⁿ':
                funciones.innerHTML = ',' + display.innerHTML + ')';
                display.innerHTML = 'potencia(';
                break;  
            case '√':
                display.innerHTML += 'raiz(';
                funciones.innerHTML += ')';
                break;     
            case '√n':
                funciones.innerHTML =  display.innerHTML + ')';
                display.innerHTML = 'raiz(';
                break;         
            case 'sin':
                display.innerHTML += 'seno(';
                funciones.innerHTML += ')';
                break;
            case 'cos':
                display.innerHTML += 'coseno(';
                funciones.innerHTML += ')';
                break;
            case 'tg':
                display.innerHTML += 'tangente(';
                funciones.innerHTML += ')';
                break;
            case 'π':
                display.innerHTML += 'π';
                break;
            case 'e':
                display.innerHTML += 'e';
                break;
            case 'ln':
                display.innerHTML += 'ln(';
                funciones.innerHTML += ')';
                break;
            case 'log':
                display.innerHTML += 'log(';
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

function seno(n) {
    return Math.sin(n);
}

function coseno(n) {
    return Math.cos(n);
}

function tangente(n) {
    return Math.tan(n);
}

function potencia(b, e) {
    return Math.pow(b,e)
}

function raiz(n) {
    return Math.sqrt(n);
}

function ln(n) {
    return Math.log(n);
}

function log(n) {
    return Math.log10(n);
}