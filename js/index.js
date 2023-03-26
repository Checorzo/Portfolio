//Variables para abtraer elementos HTML
let portfolio = document.querySelector("#Portfolio");
let about = document.querySelector("#About");
let contactMe = document.querySelector("#ContactMe");
let open = document.querySelectorAll(".expand");
let modal = document.querySelector("#modal");
let closeModal = document.querySelector("#close-modal");
let card,
   cloneCard;

console.log(modal);

const linkButtons = document.querySelector(".navbar-container");

// about.classList.add("traer-al-frente");
linkButtons.addEventListener("click", (e) => {
   // e.preventDefault();
  const button = e.target,
    link = button.textContent;
  console.log(link);
  if (link === "About") {
     about.scrollIntoView(true);
    // portfolio.classList.contains("traer-al-frente")
    //   ? portfolio.classList.replace("traer-al-frente", "mandar-atras")
    //   : portfolio.classList.add("mandar-atras");
    // contactMe.classList.contains("traer-al-frente")
    //   ? contactMe.classList.replace("traer-al-frente", "mandar-atras")
    //   : contactMe.classList.add("mandar-atras");
    // about.classList.contains("mandar-atras")
    //   ? about.classList.replace("mandar-atras", "traer-al-frente")
    //   : about.classList.add("traer-al-frente");
    // console.log("Fui presionado");
  }
  if (link === "Portfolio") {
     portfolio.scrollIntoView(true);
    // about.classList.contains("traer-al-frente")
    //   ? about.classList.replace("traer-al-frente", "mandar-atras")
    //   : about.classList.add("mandar-atras");
    // contactMe.classList.contains("traer-al-frente")
    //   ? contactMe.classList.replace("traer-al-frente", "mandar-atras")
    //   : contactMe.classList.add("mandar-atras");

    // portfolio.classList.contains("mandar-atras")
    //   ? portfolio.classList.replace("mandar-atras", "traer-al-frente")
    //   : portfolio.classList.add("traer-al-frente");
    // console.log("Fui presionado");
  }

  if (link === "Contact me") {
     contactMe.scrollIntoView(true);
    // portfolio.classList.contains("traer-al-frente")
    //   ? portfolio.classList.replace("traer-al-frente", "mandar-atras")
    //   : portfolio.classList.add("mandar-atras");
    // about.classList.contains("traer-al-frente")
    //   ? about.classList.replace("traer-al-frente", "mandar-atras")
    //   : about.classList.add("mandar-atras");
    // contactMe.classList.contains("mandar-atras")
    //   ? contactMe.classList.replace("mandar-atras", "traer-al-frente")
    //   : contactMe.classList.add("traer-al-frente");
    // console.log("Fui presinado");
  }
});
// console.log(open[1]);
open.forEach(element =>{
   element.addEventListener("click",(e)=>{
   
     const t = e.target;
       card = t.parentElement
     
   console.log(`voy a abrir la card del proyecto selecinado.
      Soy el elemento ${t.parentElement.parentElement}`) ;
   // card = t.parentElement; 
   console.log(card);
      cloneCard = card.firstElementChild.cloneNode(true);
      cardModal(cloneCard);

   });
})

closeModal.addEventListener("click", ()=>{
   // e.preventDefault();
   modal.removeChild(cloneCard);
   modal.classList.remove("modal-window-open");
})
modal.addEventListener("click", ()=>{
   // e.preventDefault();
   // modal.removeChild(cloneCard);
   // modal.removeChild(cloneCard);
   modal.classList.remove("modal-window-open");
})
const cardModal = function(card){
   card.removeChild(card.lastElementChild);
   card.classList.add("modal-image-container")
   console.log(card);
   modal.appendChild(card);
   modal.classList.add("modal-window-open");
   card.classList.replace("card-container", "card-modal");
   card.lastElementChild.classList.toggle("no-visible");
}
