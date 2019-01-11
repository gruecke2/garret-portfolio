

const menuBtn = $(".menu-btn");
const menu = $(".menu");
const menuNav = $(".menu-nav");
const menuBrand = $(".menu-branding");
const lines = $(".btn-line")

const navItems = $(".nav-item");

let showmenu = false;

$(menuBtn).on("click", toggleMenu);

function toggleMenu(){
    $(menuBtn).toggleClass('close');
    $(lines).toggleClass('close');

    $(menu).toggleClass('show');
    $(menuNav).toggleClass('show');
    $(menuBrand).toggleClass('show');
    $(navItems).toggleClass('show');
}