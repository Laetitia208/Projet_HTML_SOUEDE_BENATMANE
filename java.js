const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }

    });
});
//Cette fonction permet d'ajouter un délai d'affichage pour ajouter plus de style

hiddenElements.forEach((el) => observer.observe(el));


const form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    alert("Votre demande a bien été envoyée !");
})
//Cette fonction permet de détecter si l'utilisateur a cliqué pour le bouton Envoyer et envoie ensuite un message 