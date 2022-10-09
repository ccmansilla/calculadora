/* display */
const display = document.getElementById("resultado");

/* fornula anterior y posterior */
let anterior = '';
let posterior = '';
let calculo = '';

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
                anterior = '';
                posterior = '';
                break;
            case 'MR':
                anterior = '';
                posterior = '';
                break;
            case 'x²':  
                anterior += 'potencia(';
                posterior = ',2)' + posterior;
                break;                
            case 'x³':
                anterior += 'potencia(';
                posterior = ',3)' + posterior;
                break;   
            case 'xⁿ':
                posterior = ',' + anterior + posterior + ')';
                anterior = 'potencia(';
                break;  
            case '√':                
                anterior += 'raiz(';
                posterior = ')' + posterior;
                break;    
            case '∛':
                anterior += 'raizCubica(';
                posterior = ')' + posterior;
                break;                     
            case 'ⁿ√':
                posterior = ',' + anterior + posterior + ')';
                anterior = 'raiz_n(';
                break;         
            case 'sin':
                anterior += 'seno(';
                posterior = ')' + posterior;
                break;
            case 'cos':
                anterior += 'coseno(';
                posterior = ')' + posterior;
                break;
            case 'tg':
                anterior += 'tangente(';
                posterior = ')' + posterior;
                break;
            case 'π':
                anterior += 'π';
                break;
            case 'e':
                anterior += 'e';
                break;
            case 'ln':
                anterior += 'ln(';
                posterior = ')' + posterior;
                break;
            case 'log':
                anterior += 'log(';
                posterior = ')' + posterior;
                break;
            case 'x!':
                anterior += 'factorial(';
                posterior = ')' + posterior;
                break; 
            case '=':
                try {
                    calculo = eval(anterior + posterior);
                } catch (error) {
                    calculo = "ERROR";
                }
                anterior = calculo;
                posterior = '';
                break;
            default:
                anterior += btn.value;
        }
        display.innerHTML = anterior + posterior;
    }
    ,false);
});


/* funciones en español */
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
    return Math.pow(b, e);
}

function raiz(n) {
    return Math.sqrt(n);
}

function raiz_n(x,n) {
    return Math.pow(x, 1/n);
}

function ln(n) {
    return Math.log(n);
}

function log(n) {
    return Math.log10(n);
}

function raizCubica(n) {
    return Math.pow(n, 1/3);
}