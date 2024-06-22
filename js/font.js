// List of fonts to cycle through
const fonts = ["Space Mono", "Chivo Mono", "Source Code Pro", "Kode Mono", "Syne Mono"];
let currentFontIndex = 0;

// Function to change the font
function changeFont() {
    const firstLine = document.querySelector('.first-line');
    const letters = Array.from(firstLine.textContent);
    firstLine.innerHTML = '';
    letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.className = 'font-changing'; // Add class name here
        span.style.fontFamily = fonts[(currentFontIndex + index) % fonts.length];
        firstLine.appendChild(span);
    });
    currentFontIndex++;
}

// Call changeFont every 750ms
setInterval(changeFont, 750);