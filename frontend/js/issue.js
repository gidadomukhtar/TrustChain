document.addEventListener("DOMContentLoaded", () => {

const btn = document.getElementById("issueBtn");

if (!btn) return;

btn.addEventListener("click", () => {

btn.disabled = true;

btn.innerHTML = "Generating Certificate...";

showToast("Generating Digital Certificate...", "success");

setTimeout(() => {

document.getElementById("issueResult").style.display = "block";

btn.innerHTML = "Certificate Issued ✓";

btn.style.background = "#22c55e";

showToast("Certificate Successfully Issued", "success");

},3000);

});

});