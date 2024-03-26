
window.addEventListener("scroll", function(){
let header = document.querySelector('#inicio')
header.classList.toggle('rolagem',window.scrollY > 500)
})

window.sr = ScrollReveal({ reset: true});
sr.reveal('.conteiner2', {duration : 2000})

sr.reveal('.info_obj-1', {duration : 5000})

sr.reveal('.info_obj-2', {duration : 2000})
 


class MobileNavbar{
    constructor(mobileMenu , navList, navLinks ) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link) => {
            link.style.animation
                ? (link.style.animation = " ")
                : (link.style.animation = `navLinkFade 0.50s ease forwards 0.5s` );
        });
    }

    handleClick(){

        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);


    }
    init() {
        if (this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }

}
const mobileNavbar = new MobileNavbar(
    ".mobile-menu ",
    ".nav-list",
    ".nav-list li",
);
    mobileNavbar.init();
