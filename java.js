const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }

    });
});

hiddenElements.forEach((el) => observer.observe(el));


const form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    alert("Votre demande a bien été envoyée !");
})