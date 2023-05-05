"use strict";

const sliderCard = [...document.querySelectorAll(".slider__card")];

const btSiguiente = document.querySelector(".btSiguiente");
const btAnterior = document.querySelector(".btAnterior");

let valor;

btSiguiente.addEventListener("click", ()=> cambiar(1));
btAnterior.addEventListener("click", ()=> cambiar(-1));


function cambiar(arg) {
    
  const posicionId = Number(document.querySelector(".show").dataset.id);

  valor= posicionId;

  valor+= arg;


  if (valor === 0 || valor === sliderCard.length+1) {
    valor = valor === 0 ? sliderCard.length : 1;
  }

  sliderCard[posicionId-1].classList.toggle("show")
  sliderCard[valor-1].classList.toggle("show")


}