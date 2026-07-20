const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.classList.add("sticky");

    }else{

        navbar.classList.remove("sticky");

    }

});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        if(window.scrollY>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});
const animatedElements=document.querySelectorAll(".from-left,.from-right,.from-bottom");

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

animatedElements.forEach(element=>{

    observer.observe(element);

});
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
const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(e){

    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    setTimeout(() => {

        submitBtn.textContent = "✔ Message Sent";

        formMessage.textContent = "Your message has been sent successfully!";
        formMessage.classList.add("show");

        form.reset();

        setTimeout(() => {

            submitBtn.disabled = false;
            submitBtn.textContent = "Send Message";

            formMessage.classList.remove("show");

        },2500);

    },1800);

});
const themeBtn = document.getElementById("themeToggle");

// Sayfa açılırken kayıtlı temayı yükle
if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";

}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");
        themeBtn.textContent="☀️";

    }else{

        localStorage.setItem("theme","light");
        themeBtn.textContent="🌙";

    }

});

// ===========================
// Menu Filter
// ===========================

const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        cards.forEach(card => {

            if(filter === "all" || card.dataset.category === filter){

                card.style.display = "";

                setTimeout(()=>{

                    card.classList.remove("hide");
                    card.classList.add("show");

                },20);

            }else{

                card.classList.remove("show");
                card.classList.add("hide");

                setTimeout(()=>{

                    card.style.display="none";

                },300);

            }

        });

    });

});
// ===========================
// Hamburger Menu
// ===========================

const menuToggle = document.getElementById("menuToggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click",()=>{

    menu.classList.toggle("active");

});
navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        menu.classList.remove("active");

    });

});