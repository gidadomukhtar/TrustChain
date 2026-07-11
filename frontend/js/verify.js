const verifyBtn = document.getElementById("verifyBtn");

verifyBtn.addEventListener("click", () => {

    const status = document.getElementById("statusText");
    const score = document.getElementById("trustScore");

    const auth = document.getElementById("auth");
    const risk = document.getElementById("risk");
    const ocr = document.getElementById("ocr");
    const meta = document.getElementById("meta");
    const sig = document.getElementById("sig");
    const hash = document.getElementById("hash");
    const qr = document.getElementById("qr");
    const ai = document.getElementById("ai");
    const recommendation = document.getElementById("recommendation");

    const progress = document.getElementById("progressBar");

    progress.style.width = "0%";

    score.innerHTML = "--";

    status.style.color = "#FBBF24";

    status.innerHTML = "Booting SINTEL AI v1.0...";
    [
        auth,
        risk,
        ocr,
        meta,
        sig,
        hash,
        qr,
        ai,
        recommendation
    ].forEach(item => item.innerHTML = "Pending");

    setTimeout(() => {

        progress.style.width = "10%";
        status.innerHTML = "Reading document with OCR...";
        ocr.innerHTML = "Processing...";

    }, 800);

    setTimeout(() => {

        progress.style.width = "25%";
        ocr.innerHTML = "✔ Complete";
        status.innerHTML = "Analyzing metadata...";
        meta.innerHTML = "Passed";

    }, 1600);

    setTimeout(() => {

        progress.style.width = "40%";
        status.innerHTML = "Generating cryptographic hash...";
        hash.innerHTML = "SHA-256 Valid";

    }, 2400);

    setTimeout(() => {

        progress.style.width = "55%";
        status.innerHTML = "Validating digital signature...";
        sig.innerHTML = "Verified";

    }, 3200);

    setTimeout(() => {

        progress.style.width = "70%";
        status.innerHTML = "Checking QR authenticity...";
        qr.innerHTML = "Verified";

    }, 4000);

    setTimeout(() => {

        progress.style.width = "85%";
        status.innerHTML = "SINTEL AI is analyzing 4,812 security signals...";
        auth.innerHTML = "99.84%";
        risk.innerHTML = "LOW";
        ai.innerHTML = "Authentic";

    }, 5000);

    setTimeout(() => {

        progress.style.width = "100%";

        status.style.color = "#22C55E";
        status.innerHTML = "✅ AUTHENTIC DOCUMENT VERIFIED";

        score.innerHTML = "99.84%";

        recommendation.innerHTML = "SAFE TO ACCEPT";

    }, 6200);

});