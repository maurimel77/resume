

/* Intente meter el codigo del currentYear junto con el codigo del contador de visitas, pero
me arroja el error que comente en el codigo HTML, o sea el script se tiene que llamar despues
del elemento div de HTML y no antes, porque sino no funciona.
*/

/*
const fecha = new Date();
let currentYear = fecha.getFullYear();
console.log("Estamos en el: ", currentYear);
document.getElementById("texto_year").innerHTML = currentYear;
*/

var counterContainer = document.querySelector(".contador");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

//******************************* */



