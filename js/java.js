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

function calculerMajeure() {
    var scores = { data: 0, cyber: 0, soft: 0, immersive: 0, finance: 0 };

    // Q1
    var q1 = document.querySelector('input[name="q1"]:checked');
    if (q1) {
        scores[q1.value] += 2;
    }

    // Q2
    var q2= document.querySelectorAll('input[name="q2"]:checked');
    q2.forEach(function(cb) {
        scores[cb.value] += 1;
    });

    // Q3
    var q3 =document.querySelector('input[name="q3"]:checked');
    if (q3) {
        scores[q3.value]+= 2;
    }

    // Vérif
    if (!q1 || !q3) {
        alert("Veuillez répondre à toutes les questions !");
        return;
    }

    //score 
    var meilleureMAjeure = Object.keys(scores).reduce(function(a, b) {
        return scores[a] >= scores[b] ? a : b;
    });

    var majeures= {
        data:{ nom: "Data & Artificial Intelligence",desc: "Tu aimes les maths et l'IA. Cette majeure te forme à concevoir des modèles de Machine Learning et des systèmes intelligents." },
        cyber: { nom: "Cybersécurité & Cloud",  desc: "Tu veux protéger les systèmes. Cette majeure t'apprend à sécuriser les infrastructures et les données des organisations." },
        soft:{ nom: "Software Engineering", desc: "Tu aimes coder. Cette majeure te forme à maîtriser tout le cycle de vie d'un logiciel, du design au déploiement." },
        immersive:{ nom: "Technologies Immersives",desc: "Tu es créatif(ve). Cette majeure te plonge dans la réalité virtuelle, la 3D et les expériences interactives." },
        finance:{ nom: "IT for Finance", desc: "Tu aimes la finance et le code. Cette majeure forme des ingénieurs pour les marchés financiers numériques." }
    };

    // Afficher le résultat
    document.getElementById("nom-majeure").textContent = majeures[meilleureMAjeure].nom;
    document.getElementById("desc-majeure").textContent = majeures[meilleureMAjeure].desc;
    document.getElementById("resultat-quiz").style.display = "block";
    alert("Ta majeure recommandée : " + majeures[meilleureMAjeure].nom);
}