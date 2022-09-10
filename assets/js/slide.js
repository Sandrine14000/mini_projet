/*-----------slider js -------------*/

let slide = new Array("./assets/img/boutique.jpg","./assets/img/boutique2.jpeg","./assets/img/boutique3.jpeg","./assets/img/cabine.jpeg");
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}
//setInterval("ChangeSlide(1)", 4000);

