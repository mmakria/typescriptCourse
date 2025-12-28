// ===============================
// TypeScript & DOM – Rappels clés
// ===============================
// Déclaration d'une variable typée explicitement en string
let txt;
txt = "STRing"; // OK car c'est bien une chaîne de caractères
// --------------------------------
// Type Assertion (assertion de type)
// --------------------------------
// querySelector peut retourner Element | null
// Le "!" (non-null assertion) indique à TypeScript que l'élément existe forcément
const form = document.querySelector("form");
console.log(form.children); // Accès aux enfants du formulaire
// --------------------------------
// Type Casting avec "as"
// --------------------------------
// Autre manière de dire à TypeScript le type exact de l'élément DOM
const form2 = document.querySelector("form");
console.log(form2);
// Sélection d'un élément par classe et conversion en HTMLFormElement
const form3 = document.querySelector(".form-container");
console.log(form3);
// Sélection d'un input et conversion en HTMLInputElement
// Permet l'accès à des propriétés spécifiques comme value
const input = document.querySelector("input");
console.log(input);
// --------------------------------
// Gestion des événements (Events)
// --------------------------------
// Ajout d'un écouteur d'événement sur le formulaire
form.addEventListener("submit", handleSubmit);
// Fonction appelée lors de la soumission du formulaire
function handleSubmit(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    console.log("SUBMITTED " + input.value); // Accès à la valeur de l'input
}
// --------------------------------
// MouseEvent
// --------------------------------
// Écouteur d'événement sur la fenêtre pour les clics
window.addEventListener("click", handleClick);
// MouseEvent permet d'accéder aux coordonnées de la souris
function handleClick(event) {
    console.log(event.clientX, event.clientY);
}
// --------------------------------
// Sélection multiple d'éléments
// --------------------------------
// querySelectorAll retourne une NodeListOf<HTMLParagraphElement>
const paragraphList = document.querySelectorAll("p");
export {};
// On peut ensuite parcourir la liste avec forEach
// paragraphList.forEach(p => console.log(p.textContent));
//# sourceMappingURL=script.js.map