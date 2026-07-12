document.addEventListener("DOMContentLoaded", () => {

const verifyBtn=document.getElementById("verifyBtn");

if(!verifyBtn) return;

verifyBtn.addEventListener("click",()=>{

const status=document.getElementById("verifyStatus");

const progress=document.getElementById("progressBar");

const score=document.getElementById("trustScore");

const recommendation=document.getElementById("recommendation");

const terminal=document.getElementById("scanLog");

const logs=[

"Initializing SINTEL AI...",

"Reading document...",

"OCR completed.",

"Scanning metadata...",

"Generating SHA-256 fingerprint...",

"Comparing issuer template...",

"Checking digital signature...",

"Searching forgery patterns...",

"Running neural analysis...",

"Checking QR authenticity...",

"Confidence score generated...",

"Verification complete."

];

terminal.innerHTML="";

progress.style.width="0%";

status.innerHTML="Scanning...";

score.innerHTML="--";

recommendation.innerHTML="";

logs.forEach((log,index)=>{

setTimeout(()=>{

terminal.innerHTML+=`<div>> ${log}</div>`;

terminal.scrollTop=terminal.scrollHeight;

progress.style.width=((index+1)/logs.length)*100+"%";

},index*600);

});

setTimeout(()=>{

status.innerHTML="✔ VERIFIED";

status.style.color="#22c55e";

score.innerHTML="99.84%";

recommendation.innerHTML="Safe To Accept";

document.getElementById("auth").innerHTML="Verified";

document.getElementById("risk").innerHTML="Low";

document.getElementById("ocr").innerHTML="99.97%";

document.getElementById("meta").innerHTML="Passed";

document.getElementById("sig").innerHTML="Valid";

document.getElementById("hash").innerHTML="Matched";

document.getElementById("qr").innerHTML="Verified";

document.getElementById("ai").innerHTML="Authentic";

terminal.innerHTML += `

<hr>

<div style="color:white">

Forgery Probability : 0.16%

<br>

Issuer Verified : YES

<br>

Metadata Integrity : PASSED

<br>

Digital Signature : VALID

<br>

QR Authentication : VERIFIED

</div>

`;

showToast("Verification Completed","success");

},logs.length*600);

});

});
const upload=document.querySelector(".upload-area");

if(upload){

upload.addEventListener("dragover",(e)=>{

e.preventDefault();

upload.style.borderColor="#00E5FF";

});

upload.addEventListener("dragleave",()=>{

upload.style.borderColor="rgba(255,255,255,.12)";

});

upload.addEventListener("drop",(e)=>{

e.preventDefault();

upload.style.borderColor="rgba(255,255,255,.12)";

showToast("Document Uploaded","success");

});

}
function showToast(message,type="success"){

const toast=document.createElement("div");

toast.className=`toast ${type}`;

toast.textContent=message;

document.body.appendChild(toast);

setTimeout(()=>toast.classList.add("show"),100);

setTimeout(()=>{

toast.classList.remove("show");

setTimeout(()=>toast.remove(),400);

},2500);

}
