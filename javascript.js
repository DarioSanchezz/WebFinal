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
