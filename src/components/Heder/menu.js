var menu = document.querySelector('.header__navigation_menu');
var nav = document.querySelector('.header__navigation');
var body = document.querySelector("body");

menu.addEventListener('click', function() {
    nav.classList.toggle('inline');  
    let count = 0;
    for (let i = 0; i < nav.classList.length; i++) {
        if (nav.classList[i]=="inline") count++;
    }
    if (count == 0) nav.classList.add('OffLine');
    else nav.classList.remove('OffLine');
    
    body.classList.toggle('scroll');
});