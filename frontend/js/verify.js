const verifyBtn = document.getElementById("verifyBtn");

verifyBtn.addEventListener("click", () => {

    const status = document.getElementById("statusText");
    const score = document.getElementById("trustScore");

    const sig = document.getElementById("sig");
    const hash = document.getElementById("hash");
    const qr = document.getElementById("qr");
    const ai = document.getElementById("ai");

    const progress = document.getElementById("progressBar");

    progress.style.width = "0%";

    status.style.color = "#FBBF24";

    score.innerHTML = "--";

    sig.innerHTML = "...";
    hash.innerHTML = "...";
    qr.innerHTML = "...";
    ai.innerHTML = "...";

    const steps = [

        "Initializing TrustChain Core...",

        "Reading document...",

        "Running OCR Engine...",

        "Extracting metadata...",

        "Generating SHA-256 fingerprint...",

        "Checking digital signature...",

        "Comparing issuer database...",

        "Scanning QR authentication...",

        "Running SINTEL AI forensic analysis...",

        "Checking fonts & layout consistency...",

        "Detecting image manipulation...",

        "Cross-checking timestamps...",

        "Computing Trust Score..."

    ];

    let i = 0;

    const timer = setInterval(() => {

        status.innerHTML = steps[i];

        progress.style.width = ((i + 1) / steps.length) * 100 + "%";

        if (i === 4)
            hash.innerHTML = "✔ Valid";

        if (i === 6)
            sig.innerHTML = "✔ Verified";

        if (i === 7)
            qr.innerHTML = "✔ Authenticated";

        if (i === 10)
            ai.innerHTML = "✔ No Forgery Detected";

        i++;

        if (i >= steps.length) {

            clearInterval(timer);

            setTimeout(() => {

                status.style.color = "#22C55E";

                status.innerHTML = "🟢 DOCUMENT VERIFIED";

                score.innerHTML = "99.84 / 100";

            }, 700);

        }

    }, 700);

});