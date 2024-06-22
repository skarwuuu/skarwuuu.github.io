const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll(".menu, .menuBtn a, .menuName, .fifth-line, .hero, .skar, .project-title, .emailBtn, .resumeBtn, .project-link, .socials-content a");

document.addEventListener("mousemove", (e) => {
    let leftPosition = e.pageX + 4;
    let topPosition = e.pageY + 4 - window.pageYOffset;

    cursor.style.left = leftPosition + "px";
    cursor.style.top = topPosition + "px";
})

function addLargeClass() {
    cursor.classList.add("large");
}

function removeLargeClass() {
    cursor.classList.remove("large");
}

document.addEventListener("mousedown", function() {
    cursor.classList.add("active");
});

document.addEventListener("mouseup", function() {
    cursor.classList.remove("active");
});

links.forEach(link => {
    link.addEventListener("mouseenter", addLargeClass)
    link.addEventListener("mouseleave", removeLargeClass)
})