const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    const filter = searchInput.value.toLowerCase();

    const rows = document.querySelectorAll("#historyBody tr");

    rows.forEach(row => {

        const text = row.innerText.toLowerCase();

        row.style.display = text.includes(filter) ? "" : "none";

    });

});

document.querySelectorAll(".btn-small").forEach(btn => {

    btn.addEventListener("click", () => {

        window.location.href = "asset-details.html";

    });

});