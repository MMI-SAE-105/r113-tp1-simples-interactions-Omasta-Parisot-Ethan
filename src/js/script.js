// TODO
// Changer la couleur du texte

const aMettreEnRouge = document.querySelector("#a-mettre-en-rouge")
aMettreEnRouge.style.color = "red"


// Changer la couleur du texte suite à un click

const enRougeSuiteAClick = document.querySelector("#en-rouge-suite-a-click")
enRougeSuiteAClick.addEventListener("click", (evt)=>{
    enRougeSuiteAClick.style.color = "red"
});

// Trouver les H2 du document

const collH2 = document.querySelectorAll("h2")
collH2.forEach((elm) => {
    elm.addEventListener("click", (evt) => {
        evt.target.style.color = "red";
    });
});