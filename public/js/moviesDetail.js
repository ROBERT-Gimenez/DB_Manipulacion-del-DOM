const body = document.querySelector('body');
const h1 = document.querySelector('h1');

const msj = prompt("desea Activar el modo Oscuro?");

if(msj == null || msj == "no"){
    
}else{body.style.backgroundColor='#7f7f7f'}
body.style.textAlign="center"
h1.innerText="Listado de Peliculas"
h1.style.color='while'
h1.style.backgroundColor='teal'
h1.style.fontSize="20px"