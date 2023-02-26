//Variables para abtraer elementos HTML
let portfolio = document.querySelector("#Portfolio");
let about = document.querySelector("#About");
let contactMe = document.querySelector("#ContactMe");

const linkButtons = document.querySelector(".navbar-container");

about.classList.add("traer-al-frente");
linkButtons.addEventListener("click", (e) => {
  const button = e.target,
    link = button.textContent;
  console.log(link);
  if (link === "About") {
    portfolio.classList.contains("traer-al-frente")
      ? portfolio.classList.replace("traer-al-frente", "mandar-atras")
      : portfolio.classList.add("mandar-atras");
    contactMe.classList.contains("traer-al-frente")
      ? contactMe.classList.replace("traer-al-frente", "mandar-atras")
      : contactMe.classList.add("mandar-atras");
    about.classList.contains("mandar-atras")
      ? about.classList.replace("mandar-atras", "traer-al-frente")
      : about.classList.add("traer-al-frente");
    console.log("Fui presionado");
  }
  if (link === "Portfolio") {
    about.classList.contains("traer-al-frente")
      ? about.classList.replace("traer-al-frente", "mandar-atras")
      : about.classList.add("mandar-atras");
    contactMe.classList.contains("traer-al-frente")
      ? contactMe.classList.replace("traer-al-frente", "mandar-atras")
      : contactMe.classList.add("mandar-atras");

    portfolio.classList.contains("mandar-atras")
      ? portfolio.classList.replace("mandar-atras", "traer-al-frente")
      : portfolio.classList.add("traer-al-frente");
    console.log("Fui presionado");
  }

  if (link === "Contact me") {
    portfolio.classList.contains("traer-al-frente")
      ? portfolio.classList.replace("traer-al-frente", "mandar-atras")
      : portfolio.classList.add("mandar-atras");
    about.classList.contains("traer-al-frente")
      ? about.classList.replace("traer-al-frente", "mandar-atras")
      : about.classList.add("mandar-atras");
    contactMe.classList.contains("mandar-atras")
      ? contactMe.classList.replace("mandar-atras", "traer-al-frente")
      : contactMe.classList.add("traer-al-frente");
    console.log("Fui presinado");
  }
});
