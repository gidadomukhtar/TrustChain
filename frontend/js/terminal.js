const lines = [

    "Initializing TrustChain Security Engine...",

    "Generating SHA-256 Hash...",

    "Validating Digital Signature...",

    "Running Sentinel AI Analysis...",

    "Calculating Trust Score...",

    "Verification Complete."

];

const terminal = document.getElementById("terminal");

if (terminal) {

    let i = 0;

    function printLine() {

        if (i >= lines.length) return;

        const p = document.createElement("p");

        p.textContent = "> " + lines[i];

        terminal.appendChild(p);

        i++;

        setTimeout(printLine, 700);

    }

    printLine();

}