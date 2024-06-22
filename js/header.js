window.addEventListener('load', function() {
    var menuBtn = document.querySelector('.menuBtn');
    menuBtn.style.display = 'none';
});

function chngeIcon(x) {
    x.classList.toggle("change");
    var header = document.querySelector('header');
    var isChange = x.classList.contains('change');
    if (window.innerWidth <= 1220) {
        header.style.flexDirection = isChange ? 'column' : 'row';
        header.style.alignItems = isChange ? 'start' : 'center';
    }
    else {
        header.style.flexDirection = 'row';
        header.style.alignItems = 'center';
    }
    var menuBtn = document.querySelector('.menuBtn');
    var menuName = document.querySelector('.menuName');
    menuBtn.style.display = isChange ? 'flex' : 'none';
    menuName.style.display = isChange ? 'none' : 'block';
}

$(document).on('mouseenter', '.menuName', function() {
    $(this).text('skarwuuu');
}).on('mouseleave', '.menuName', function() {
    $(this).text('Saksham Rawat');
});