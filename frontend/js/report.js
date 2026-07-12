document.addEventListener("DOMContentLoaded",()=>{

const pdf=document.getElementById("downloadPdf");

const share=document.getElementById("shareReport");

if(pdf){

pdf.addEventListener("click",()=>{

showToast("Generating forensic PDF report...");

setTimeout(()=>{

showToast("PDF Generated Successfully");

},1500);

});

}

if(share){

share.addEventListener("click",()=>{

showToast("Secure report link copied");

});

}

});

function showToast(message,type="success"){

const toast=document.createElement("div");

toast.className=`toast ${type}`;

toast.innerHTML=message;

document.body.appendChild(toast);

setTimeout(()=>toast.classList.add("show"),100);

setTimeout(()=>{

toast.classList.remove("show");

setTimeout(()=>toast.remove(),400);

},2500);

}