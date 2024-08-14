function funAbrir(){
    let accesibilidad=document.getElementById("accesibilidad");
    accesibilidad.style.display="block";
}
function funCerrar(){
    let accesibilidad = document.getElementById("accesibilidad");
    accesibilidad.style.display = "none";
}
function funLetraGrande(){
    let letraGrande = document.getElementById("letraNormal");
    letraGrande.setAttribute("href", "sass/letraGrande.css");
}

function funLetraGrandex2(){
    let letraGrandex2 = document.getElementById("letraNormal");
    letraGrandex2.setAttribute("href", "sass/letraGrandex2.css");
}

function funLetraNormal(){
    let letraNormal = document.getElementById("letraNormal");
    letraNormal.setAttribute("href", "");
}

function funEspaciado(){
    let espaciado = document.getElementById("espaciado");
    espaciado.setAttribute("href", "sass/espaciado.css");
}

function funNoEspaciado(){
    let noEspaciado = document.getElementById("espaciado");
    noEspaciado.setAttribute("href", "");
}
function funContraste(){
    let contraste = document.getElementById("colores");
    contraste.setAttribute("href", "sass/contraste.css")
}
function funInvertirColores(){
    let invertirColores = document.getElementById("colores");
    invertirColores.setAttribute("href", "sass/invertir.css")
}
function funBN(){
    let coloresBN = document.getElementById("colores");
    coloresBN.setAttribute("href", "sass/blanco_negro.css")
}
function funColoresNormales(){
    let coloresNormal = document.getElementById("colores");
    coloresNormal.setAttribute("href", "")
}

function funActivarVinculos(){
    let vinculos = document.getElementById("vinculos");
    vinculos.setAttribute("href", "sass/vinculos.css")
}

function funDesactivarVinculos(){
    let vinculos = document.getElementById("vinculos");
    vinculos.setAttribute("href", "")
}