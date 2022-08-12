const cartita = document.querySelector(".card");
const cabecera = document.querySelector("#segundo");
const cerrar = document.querySelector(".close");


cartita.addEventListener('click', (e) => {
  if(e.target.classList.contains("card")){
    console.log(e.target.lastElementChild);
    
  }
});

cabecera.addEventListener('click', (e) => {
  e.stopPropagation();
  e.target.parentElement.firstElementChild.firstElementChild.style.color = "white"
  e.target.previousElementSibling.previousElementSibling.children[0].style.background = "purple"

});

cerrar.addEventListener('click', (e) => {
  if(e.target.classList.contains("close")){
    console.log(e.target.parentElement.parentElement.parentElement);
    e.target.parentElement.style.background = "blue";
  }
    
});


//delegation 