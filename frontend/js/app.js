/* ==========================================
   TRUSTCHAIN
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("TrustChain Loaded");

});


// Number Counter

const counters = document.querySelectorAll("[data-count]");

const speed = 40;

counters.forEach(counter => {

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

    }

    update();

});


// Scroll Animation

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade-up");

        }

    });

});

document.querySelectorAll("section,.card").forEach(el => {

    observer.observe(el);

});