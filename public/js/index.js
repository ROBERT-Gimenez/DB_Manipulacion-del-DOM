const body = document.querySelector('body');
const main = document.querySelector('main');
const h2 = document.querySelector('h2');
const a = document.querySelectorAll('a');
const p = document.querySelectorAll('p');


var mensaje;
var opcion = prompt("Introduzca su nombre:");
 
if (opcion == null || opcion == "") {
        mensaje = "Modo Invitado";
        } else {
            mensaje = "Hola " + opcion;
            }
            h2.innerHTML = mensaje;
            document.querySelector('h2').style.textTransform = 'uppercase'

a.forEach(a => a.style.color='#e51b3e')
var mensaje1
let muro = confirm("desea color un Fondo");

if(muro == true){
    body.classList.add('fondo')

}

p.forEach(p => p.classList.add('destacadoPar'))

main.style.display= 'block';


