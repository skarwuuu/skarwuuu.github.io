document.addEventListener('DOMContentLoaded', function() {
    var projectTitles = document.querySelectorAll('.project-title');

    projectTitles.forEach(function(title) {
        title.addEventListener('click', function() {
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                panel.style.marginBottom = null; // Reset margin-bottom when closed
                this.classList.remove('open');
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                panel.style.marginBottom = "110px"; // Set margin-bottom when opened
                this.classList.add('open');
            } 
        });
    });
});