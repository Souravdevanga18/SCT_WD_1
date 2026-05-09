window.addEventListener("scroll", ()=>{

    const navbar=document.getElementById("navbar");

    navbar.classList.toggle("scrolled",window.scrollY>50);

});

const menuToggle=document.getElementById("menu-toggle");

const navLinks=document.querySelector(".nav-links");

menuToggle.addEventListener("click", ()=>{

    navLinks.classList.toggle("active");

});