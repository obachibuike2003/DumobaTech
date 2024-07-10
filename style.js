function myMenuFunction() {
    var menuBth = document.getElementById("My Navmenu")

    if(menuBth.className === "nav-menu") {
        menuBth.className += "responsive";
    } else(menuBth.className = "nav-menu")
}



/*------dark-mode------*/

const body = document.querySelector("body")
toggleSwitch = document.getElementById("toggle-switch");


toggleSwitch.addEventListener("click",()=> {
 body.classList.toggle("dark");
});


/*------Typing-Effect--------*/


var typingEffect = new Typed (".typed-text",{
    strings: ["Designer", "coder","Developer"],

    loop: true,
    TypeSpeed:100,
    backSpeed:80,
    backDelay:2000,

})

/*------Scroll animation--------*/

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".featureed-name", {delay: 100 });
sr.reveal(".text-info", {delay: 200 });
sr.reveal(".text-btn", {delay: 200 });
sr.reveal(".social-icons", {delay: 200 });
sr.reveal(".featured-image", {delay: 320 });
sr.reveal(".project-box", {interval: 200 });
sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srLeft.reveal(".about-info", {delay: 100});
srLeft.reveal(".contact-info", {delay: 100});

const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: true,
});


srRight.reveal(".skill", {delay: 100});
srRight.reveal(".skill-box", {delay: 100});


/*------active link---------*/

const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        // Query the link element
        const linkElement = document.querySelector(".nav-menu a[href*='" + sectionId + "']");

        // Check if the link element exists
        if (linkElement) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                linkElement.classList.add("active-link");
            } else {
                linkElement.classList.remove("active-link");
            }
        }
    });
}

window.addEventListener("scroll", scrollActive);
