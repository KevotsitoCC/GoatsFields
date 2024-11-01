document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("sidebar");
    const logo = document.getElementById("logo");
    const buttons = document.querySelectorAll(".sidebar-button");
    const sections = document.querySelectorAll(".content-section");

    const carousel = document.querySelector(".carousel");
    let currentIndex = 0;
    const items = carousel.querySelectorAll(".carousel-item");
    const itemWidth = items[0].offsetWidth + 15; // Ancho del item más el gap

    // Función para alternar la visibilidad de la barra lateral
    logo.addEventListener("click", function() {
        sidebar.classList.toggle("closed");
    });

    // Función para cambiar de sección
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const sectionId = button.getAttribute("data-section");

            // Oculta todas las secciones y elimina la clase 'active'
            sections.forEach(section => section.classList.remove("active"));

            // Muestra la sección correspondiente
            document.getElementById(sectionId).classList.add("active");
        });
    });

    function showNextItem() {
        currentIndex++;
        if (currentIndex === items.length) {
            currentIndex = 0;
        }
        carousel.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
    }

    // Avanza cada 5 segundos
    setInterval(showNextItem, 5000);
});

