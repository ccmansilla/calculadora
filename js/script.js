/* pantalla */
let pantalla = document.getElementById("pantalla");
let suma = 1+1; 
pantalla.innerHTML = `1+1=${suma}`;

/* botones numeros */
for(let i = 0; i <= 9; i++){
    addEventListenerBtn(i);
}

/* boton AC*/
let btn_ac = document.getElementById("ac");
btn_ac.addEventListener('click', function() {
        pantalla.innerHTML = '';
    }
,false);

/* boton +*/
addEventListenerBtn('+');

/* boton .*/
addEventListenerBtn('.');

function addEventListenerBtn(id){
    let btn = document.getElementById(id);
    btn.addEventListener('click', function() {
            pantalla.innerHTML += id;
        }
    ,false);
} 