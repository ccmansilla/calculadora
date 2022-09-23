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
            try {
                display.innerHTML = eval(display.innerHTML);
            } catch (error) {
                display.innerHTML = "ERROR";
            }
        } else {
            display.innerHTML += btn.value;
        }
    }
    ,false);
});