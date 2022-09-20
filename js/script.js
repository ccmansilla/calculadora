/* pantalla */
let pantalla = document.getElementById("pantalla");

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

/* boton = */
let btn_igual = document.getElementById("=");
btn_igual.addEventListener('click', function() {
        let calculo = pantalla.innerHTML;
        try{ 
            pantalla.innerHTML = eval(calculo);        
        }   
        catch(error){   
            pantalla.innerHTML = 0;
            console.log(error); 
        }
        
    }
,false);

/* botones operaciones*/
addEventListenerBtn('+');
addEventListenerBtn('-');
addEventListenerBtn('/');
addEventListenerBtn('*');

/* botones parentesis */
addEventListenerBtn('(');
addEventListenerBtn(')');

/* boton .*/
addEventListenerBtn('.');

function addEventListenerBtn(id){
    let btn = document.getElementById(id);
    btn.addEventListener('click', function() {
            pantalla.innerHTML += id;
        }
    ,false);
} 