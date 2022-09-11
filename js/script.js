/* pantalla */
let pantalla = document.getElementById("pantalla");
let suma = 1+1; 
pantalla.innerHTML = `1+1=${suma}`;

/* botones numeros */
for(let i = 0; i <= 9; i++){
    let btn = document.getElementById(i);
    btn.addEventListener('click', function() {
            pantalla.innerHTML += i;
        }
    ,false);
}

/* boton AC*/
let btn_ac = document.getElementById("ac");
    btn_ac.addEventListener('click', function() {
            pantalla.innerHTML = '';
        }
    ,false);