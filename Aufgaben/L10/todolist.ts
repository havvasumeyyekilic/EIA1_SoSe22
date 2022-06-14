const list = document.querySelector("#list");
const form = document.getElementById("new-task-form");
const input = document.querySelector("#new-task-title");
const button = document.getElementById("button");
var zaehler: number = 0;

button.addEventListener("click", addText);
function addText() {
    var text = input.value;
    console.log(text);
    var newPoint = document.createElement("li"); //Listenelement
    list.appendChild(newPoint);
    createCheckButton(newPoint); // in die function springen chekbutton und newpoint nutzen
    var textBlock = document.createTextNode(text);
    newPoint.appendChild(textBlock); //Browsereingabe Liste
    zaehler++;
    zaehlerTitel();

}

function zaehlerTitel() {
    var zaehler1 = document.getElementById("zaehlerTitel");
    if (zaehler == 1) {
        zaehler1.innerText = String(zaehler + " Task"); //zaehler wird rausgenommen und durch string keine number // parsInt gegengteil
    }
    else {
        zaehler1.innerText = String(zaehler + " Tasks"); //mehr als einer, springt der da hin if else verhältnis
    }
}
function createCheckButton(newPoint) {
    var newCheckButton = document.createElement("i");
    newCheckButton.classList.add("fa-regular"); // stil kreis -> normales font awesome element
    newCheckButton.classList.add("fa-circle"); // regulären kreis angeben für check liste
    newPoint.appendChild(newCheckButton);
    newCheckButton.addEventListener("click", checkButtonAufruf); // addeventlistener aufruf und funktion
}

function checkButtonAufruf() {
    var activeButton = document.querySelector("i:hover"); // button click wird das elemtn unter activebutton abgespeichert
    activeButton.classList.add("fa-circle-check");
    activeButton.classList.remove("fa-circle"); // klasse circle-check wird getauscht mit circle
}

function trashButton(newPoint) {
    var TrashCan = document.createElement("i"); // i element wird erzeugt und mülleimer wird angezeigt
    TrashCan.classList.add("fa-regular");
    TrashCan.classList.add("fa-trash-can");
    newPoint.appendChild(TrashCan);
    TrashCan.addEventListener("click", DeleteTrashCan);
}

function DeleteTrashCan() {
    var acttiveButton = document.querySelector("i:hover"); // Müllsymbol wird unter variable gesppeichert
    var activeli = acttiveButton.parentElement;
    activeli.remove();
}