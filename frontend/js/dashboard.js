document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".trust-score");

    const values = [
        12481,
        412,
        99.84,
        2.3
    ];

    cards.forEach((card, index) => {

        let start = 0;

        const end = values[index];

        const duration = 1500;

        const increment = end / 60;

        const timer = setInterval(() => {

            start += increment;

            if (start >= end) {

                clearInterval(timer);

                if (index === 0)
                    card.innerHTML = "12,481";

                else if (index === 1)
                    card.innerHTML = "412";

                else if (index === 2)
                    card.innerHTML = "99.84%";

                else
                    card.innerHTML = "2.3s";

            } else {

                if (index === 2)
                    card.innerHTML = start.toFixed(2) + "%";

                else if (index === 3)
                    card.innerHTML = start.toFixed(1) + "s";

                else
                    card.innerHTML = Math.floor(start);

            }

        }, duration / 60);

    });

    // Live verification feed simulation

    const table = document.querySelector("tbody");

    const events = [
        ["Bank Statement", "Verified", "Just now"],
        ["NIN Record", "Verified", "Just now"],
        ["Professional License", "Forgery Detected", "Just now"],
        ["NYSC Certificate", "Verified", "Just now"],
        ["University Transcript", "Verified", "Just now"]
    ];

    setInterval(() => {

        const random = events[Math.floor(Math.random() * events.length)];

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${random[0]}</td>
            <td style="color:${random[1].includes("Forgery") ? "#ef4444" : "#22c55e"};font-weight:700;">
                ${random[1]}
            </td>
            <td>${random[2]}</td>
        `;

        table.prepend(row);

        if (table.rows.length > 6) {
            table.deleteRow(table.rows.length - 1);
        }

    }, 7000);

});