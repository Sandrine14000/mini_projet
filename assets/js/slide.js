/*-----------slider js -------------*/

let slide = new Array("../img/boutique.jpg","../img/boutique2.jpeg","../img/boutique3.jpeg","../img/cabine.jpeg");
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}
setInterval("ChangeSlide(1)", 3000);

