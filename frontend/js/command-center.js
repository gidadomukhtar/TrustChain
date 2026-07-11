setInterval(() => {
    document.querySelectorAll(".pulse").forEach((p) => {
        p.style.transform = "scale(1.6)";

        p.style.opacity = ".2";

        setTimeout(() => {
            p.style.transform = "scale(1)";

            p.style.opacity = "1";
        }, 600);
    });
}, 2000);