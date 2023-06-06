function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}
const fulImgBox =document.getElementById("fulImgBox");
fulImg=document.getElementById("fulImg");

function closeImg(){
  fulImgBox.style.display="none"
}

function openFulImg(reference){
  fulImgBox.style.display="flex";
  fulImg.src=reference;
}
function reserva(){
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var telefono = document.getElementById("telefono").value;
  var correo = document.getElementById("correo").value;
  var confirmarCorreo = document.getElementById("confirmarCorreo").value;
  var fecha = document.getElementById("fecha").value;
  var hora = document.getElementById("hora").value;
  var numPersonas = document.getElementById("num").value;
  

  if (nombre == '' || apellido == '' || telefono == '' || correo == '' || confirmarCorreo == '' || fecha == '' || hora == '' || numPersonas == '') {
    alert('Por favor, complete todos los campos obligatorios.');
  }
  else if (correo != confirmarCorreo) {
      alert('Los correos electrónicos no coinciden.');
  }
  else{
    alert('Se ha realizado la reserva a nombre de: ' + nombre+" "+apellido+" el dia "+fecha+" a las "+hora+", para "+numPersonas+" personas.");
  }
}
function contacto(){
  var nombre = document.getElementById("zom").value;
  var emailtel = document.getElementById("nom").value;
  var comentario = document.getElementById("com").value;

  if (nombre == '' || emailtel == '' || comentario == '') {
    alert('Por favor, complete todos los campos obligatorios.');
  }
  else{
    alert("Informacion enviada, le contactaremos lo antes posible. <3")
  }
}
var boton = document.getElementById('boton2');
boton.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});
function dudas() {
  var div = document.getElementById("te");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}

function dudas1() {
  var div = document.getElementById("mec");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}

function dudas2() {
  var div = document.getElementById("dec");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}

function dudas3() {
  var div = document.getElementById("rec");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}
function sugerencias(){
  alert("Su valoracion es muy importante para mejorar nuestra compañia. Muchas gracias por su aportacion <3")
}

