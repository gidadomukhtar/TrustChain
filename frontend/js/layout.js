document.querySelectorAll("[data-link]").forEach(link => {

    link.addEventListener("click", () => {

        window.location.href = link.dataset.link;

    });

});