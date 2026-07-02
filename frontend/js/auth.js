document.querySelectorAll("form").forEach(form => {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        window.location.href = "dashboard.html";

    });

});