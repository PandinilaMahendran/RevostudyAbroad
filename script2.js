// Function to navigate to different sections
function navigateTo(sectionId) {
    // Remove the 'active' class from all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Add the 'active' class to the selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Smooth scroll to the top of the page when a section is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
//faq
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const toggle = button.querySelector('.faq-toggle');

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            toggle.textContent = '+';
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            toggle.textContent = '−';
        }
    });
});
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Form validation
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();
    const budget = document.getElementById("budget").value.trim();
    const destination = document.getElementById("destination").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !number || !budget || !destination || !message) {
        alert("Please fill in all fields.");
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!/^\d+$/.test(number)) {
        alert("Please enter a valid phone number.");
        return;
    }

    alert("Your message has been sent successfully!");
    this.reset();
});
//animation
    document.querySelectorAll('.faq-question').forEach((question) => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            answer.classList.toggle('expanded');
        });
    });
//universities
    function showUniversities(countryId) {
        document.querySelectorAll('.universitie').forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(countryId).style.display = 'block';
        window.scrollTo(0, document.getElementById(countryId).offsetTop);
    }
    
//chatbot
(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="_yiZ6yTCz2EwCapHFFa6P";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();

let index = 0;
const slides = document.querySelectorAll(".slide");
function showSlides() {
    slides.forEach(slide => slide.classList.remove("active"));
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}
setInterval(showSlides, 3000);


