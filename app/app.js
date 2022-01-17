//Função do Header fixo
window.addEventListener("scroll", function () {
  const headerfixo = document.querySelector("header");
  headerfixo.classList.toggle("sticky", window.scrollY > 0);
});

//função toggleMenu

