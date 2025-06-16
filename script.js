document.addEventListener("DOMContentLoaded", () => {
    // Animación de aparición al hacer scroll
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));

    // Efecto de búsqueda en el header
    const searchIcon = document.querySelector(".search-icon");
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Buscar...";
    searchInput.classList.add("search-bar");

    searchIcon.addEventListener("click", () => {
        searchIcon.replaceWith(searchInput);
        searchInput.focus();
    });

    searchInput.addEventListener("blur", () => {
        searchInput.replaceWith(searchIcon);
    });

    // Alternar modo oscuro/claro
    const themeToggle = document.createElement("button");
    themeToggle.innerText = "☀️";
    themeToggle.classList.add("theme-toggle");
    document.body.appendChild(themeToggle);

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        themeToggle.innerText = document.body.classList.contains("light-mode") ? "🌙" : "☀️";
    });
});
