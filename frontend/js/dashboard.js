document.addEventListener("DOMContentLoaded", () => {
    const badge = document.querySelector(".badge");

    setInterval(() => {
        badge.style.opacity = ".5";

        setTimeout(() => {
            badge.style.opacity = "1";
        }, 500);
    }, 1800);

    const feed = document.getElementById("liveFeed");

    const activities = [
        "🟢 University of Ibadan verified Degree Certificate",

        "🟢 Microsoft Nigeria verified Internship Certificate",

        "🟢 WAEC Certificate verified",

        "🔴 Forged NYSC Certificate blocked",

        "🟢 CAC Business Registration verified",

        "🟢 Medical License verified",

        "🟢 Identity Card verified",

        "🔴 Photoshop manipulation detected",

        "🟢 Passport verification completed",

        "🟢 Employment Letter verified",
    ];

    setInterval(() => {
        const div = document.createElement("div");

        div.className = "feed-item";

        div.innerHTML =
            activities[Math.floor(Math.random() * activities.length)] + " • Just now";

        feed.prepend(div);

        if (feed.children.length > 8) {
            feed.removeChild(feed.lastElementChild);
        }
    }, 4000);
});