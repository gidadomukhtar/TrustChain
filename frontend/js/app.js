/* ==========================================
   TRUSTCHAIN
========================================== */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (!loader) return;

    loader.innerHTML = `
    
    <div class="loader-content">
    
    <div class="loader-logo">
    
    <div class="logo-circle">TC</div>
    
    <h1>TrustChain</h1>
    
    <p>Powered by SINTEL AI</p>
    
    </div>
    
    <div id="bootText" class="boot-text"></div>
    
    <div class="loader-bar">
    
    <div id="loaderProgress"></div>
    
    </div>
    
    </div>
    
    `;

    const text = document.getElementById("bootText");

    const progress = document.getElementById("loaderProgress");

    const steps = [
        "Initializing Trust Engine...",

        "Loading Neural Security Modules...",

        "Loading Cryptographic Verification...",

        "Connecting to Global Trust Network...",

        "Launching SINTEL AI v1.0...",

        "ACCESS GRANTED ✓",
    ];

    let i = 0;

    const interval = setInterval(() => {
        text.innerHTML = steps[i];

        progress.style.width = ((i + 1) / steps.length) * 100 + "%";

        i++;

        if (i === steps.length) {
            clearInterval(interval);

            setTimeout(() => {
                loader.classList.add("loader-hide");
            }, 700);
        }
    }, 700);
});
document.addEventListener("DOMContentLoaded", () => {
    console.log("TrustChain Loaded");
});

// Number Counter

const counters = document.querySelectorAll("[data-count]");

const speed = 40;

counters.forEach((counter) => {
    const update = () => {
        const target = +counter.dataset.count;

        const current = +counter.innerText;

        const increment = target / speed;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);

            setTimeout(update, 25);
        } else {
            counter.innerText = target;
        }
    };

    update();
});

// Scroll Animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-up");
        }
    });
});

document.querySelectorAll("section,.card").forEach((el) => {
    observer.observe(el);
});
document.querySelectorAll(".counter").forEach((counter) => {
    const target = parseFloat(counter.dataset.target);

    let value = 0;

    const step = target / 80;

    const timer = setInterval(() => {
        value += step;

        if (value >= target) {
            clearInterval(timer);

            counter.innerHTML = target + (target < 10 ? "s" : "%");
        } else {
            counter.innerHTML = value.toFixed(target < 10 ? 1 : 2);
        }
    }, 20);
});
const demoBtn = document.getElementById("demoBtn");

if (demoBtn) {
    demoBtn.addEventListener("click", () => {
        const terminal = document.getElementById("terminalWindow");

        terminal.innerHTML = "";

        const logs = [
            "Booting SINTEL AI v1.0...",

            "Loading Trust Intelligence Engine...",

            "Reading uploaded document...",

            "OCR completed.",

            "Checking metadata integrity...",

            "Generating SHA-256 fingerprint...",

            "Comparing institutional template...",

            "Scanning for Photoshop manipulation...",

            "Running forensic AI analysis...",

            "Validating QR authenticity...",

            "Comparing cryptographic signature...",

            "Calculating confidence score...",

            "Risk Level: LOW",

            "Authenticity Score: 99.84%",

            "Recommendation: SAFE TO ACCEPT",

            "DOCUMENT VERIFIED ✓",
        ];

        logs.forEach((text, index) => {
            setTimeout(() => {
                terminal.innerHTML += `<div>> ${text}</div>`;

                terminal.scrollTop = terminal.scrollHeight;
            }, index * 700);
        });
    });
}
const glow = document.querySelector(".cursor-glow");

if (glow) {
    document.addEventListener("mousemove", (e) => {
        glow.style.left = e.clientX + "px";

        glow.style.top = e.clientY + "px";
    });
}
document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mousemove", (e) => {

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;

        const y = e.clientY - rect.top - rect.height / 2;

        button.style.transform = `translate(${x*.15}px,${y*.15}px)`;

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translate(0,0)";

    });

});