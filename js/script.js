/* display */
const display = document.getElementById("pantalla");

/* botones de teclado */
const teclado = document.querySelectorAll(".btnCalc");

console.log(teclado);

teclado.forEach(function(btn) {
    btn.addEventListener('click', function() {
        if (btn.value === 'AC'){
            display.innerHTML = '';
        } else if(btn.value === '=') {
            let calculo = eval(display.innerHTML);
            display.innerHTML = calculo;
        } 
        else {
            display.innerHTML += btn.value;
        }
    }
    ,false);
});