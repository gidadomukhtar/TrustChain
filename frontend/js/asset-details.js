document.querySelectorAll(".asset-buttons button").forEach(button => {

    button.addEventListener("click", () => {

        alert(button.innerText + " feature will be connected to the backend.");

    });

});