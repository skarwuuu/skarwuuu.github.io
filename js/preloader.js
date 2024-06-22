var preloader = document.getElementById("preloader");

window.addEventListener('load', function() {
    preloader.style.display = 'none';
    let originalPath = window.location.origin + window.location.pathname;
    window.history.replaceState({}, document.title, originalPath);
    window.scrollTo(0, 0);
});