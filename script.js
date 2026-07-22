// =====================================
// Sticky Navbar
// =====================================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.classList.add("sticky");

    }else{

        navbar.classList.remove("sticky");

    }

});


// =====================================
// Active Menu
// =====================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


// =====================================
// Mobile Menu
// =====================================

const menuToggle = document.getElementById("menuToggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {

    menu.classList.toggle("active");

});


// Menü linkine basınca otomatik kapansın

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});


// =====================================
// Dark Mode
// =====================================

const themeToggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";

}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");
        themeToggle.textContent = "☀️";

    }else{

        localStorage.setItem("theme","light");
        themeToggle.textContent = "🌙";

    }

});


// =====================================
// Scroll Reveal
// =====================================

const hiddenElements = document.querySelectorAll(
".from-left,.from-right,.from-bottom"
);

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

hiddenElements.forEach(element=>{

    observer.observe(element);

});
// =====================================
// Back To Top Button
// =====================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        topBtn.classList.add("show");

    }else{

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


// =====================================
// Contact Form
// =====================================

const contactForm = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    setTimeout(() => {

        submitBtn.textContent = "✔ Message Sent";

        formMessage.textContent =
        "Thank you! We will contact you soon.";

        formMessage.style.color = "green";

        contactForm.reset();

        setTimeout(() => {

            submitBtn.disabled = false;
            submitBtn.textContent = "Send Message";
            formMessage.textContent = "";

        },2500);

    },1800);

});


// =====================================
// Menu Filter
// =====================================

const filterButtons =
document.querySelectorAll(".filter-btn");

const cards =
document.querySelectorAll(".card");

filterButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        filterButtons.forEach(btn=>{

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const filter =
        button.dataset.filter;

        cards.forEach(card=>{

            if(

                filter==="all" ||

                card.dataset.category===filter

            ){

                card.style.display="flex";

            }else{

                card.style.display="none";

            }

        });

    });

});


// =====================================
// Smooth Fade In
// =====================================

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});