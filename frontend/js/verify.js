const verifyBtn = document.getElementById("verifyBtn");

verifyBtn.addEventListener("click", () => {

    const status = document.getElementById("statusText");
    const score = document.getElementById("trustScore");

    const sig = document.getElementById("sig");
    const hash = document.getElementById("hash");
    const qr = document.getElementById("qr");
    const ai = document.getElementById("ai");

    const progress = document.getElementById("progressBar");

    // Reset

    progress.style.width = "0%";

    status.style.color = "#FBBF24";
    status.innerHTML = "Initializing TrustCore...";

    score.innerHTML = "--";

    sig.innerHTML = "Waiting...";
    hash.innerHTML = "Waiting...";
    qr.innerHTML = "Waiting...";
    ai.innerHTML = "Waiting...";

    // Step 1

    setTimeout(() => {

        progress.style.width = "20%";

        status.innerHTML = "Generating SHA-256 Hash...";

    }, 1000);

    // Step 2

    setTimeout(() => {

        progress.style.width = "40%";

        hash.innerHTML = "✔ Valid";

        status.innerHTML = "Verifying Digital Signature...";

    }, 2000);

    // Step 3

    setTimeout(() => {

        progress.style.width = "60%";

        sig.innerHTML = "✔ Valid";

        status.innerHTML = "Checking QR Authentication...";

    }, 3000);

    // Step 4

    setTimeout(() => {

        progress.style.width = "80%";

        qr.innerHTML = "✔ Successful";

        status.innerHTML = "Running Sentinel AI...";

    }, 4000);

    // Step 5

    setTimeout(() => {

        progress.style.width = "95%";

        ai.innerHTML = "✔ Passed";

        status.innerHTML = "Calculating Trust Score...";

    }, 5000);

    // Final

    setTimeout(() => {

        progress.style.width = "100%";

        status.style.color = "#22C55E";

        status.innerHTML = "🟢 VERIFIED";

        score.innerHTML = "99.8 / 100";

    }, 6000);

});