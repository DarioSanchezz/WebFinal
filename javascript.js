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
