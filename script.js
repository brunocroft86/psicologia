document.addEventListener("DOMContentLoaded", function() {

    // Inicializa a biblioteca de animações
    AOS.init({
        duration: 1000, // Duração da animação em milissegundos
        once: true, // A animação acontece apenas uma vez
        offset: 100, // Inicia a animação um pouco antes do elemento aparecer na tela
    });

    // Lógica para o menu hamburger (mobile)
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Fecha o menu ao clicar em um link
    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

});