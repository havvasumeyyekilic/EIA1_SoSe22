// Abgabe: Endabgabe für EIA1
// Aufgabe: MKB LernApp für EIA1 entwickeln
// Hilfsmittel: W3School, SoSe22 Endabgabe ähnlich und Zusammenarbeit mit EIA1 Kommilitonin Havva Günay

// Datenstruktur einer einzelnen Frage mit Antworten im interface speichern als string
interface Question {
    question: string;
    wrongAnswers: string[];
    correctAnswer: string;
}

// Datenstruktur für alle Fragen und Antworten für die 4 Kategorieren
interface AllQuestions {
    html: Question[];
    css: Question[];
    typescript: Question[];
}

// Alle Fragen und Antworten in Arrays mit je 4 Kategorien
const questions: AllQuestions = {
    html: [
        {
            question: "HTML ist eine...",
            wrongAnswers: ["Gestaltungssprache", "Skriptsprache"], // je zwei antworten als "wrongAnswers" festlegen
            correctAnswer: "Auszeichnungssprache" // eine Antwort nur korrekt
        },
        {
            question: "Wie definiert man die Art des Dokuments?",
            wrongAnswers: [ "<DOCTYPE html!!>", ">DOCTYPE html<"],
            correctAnswer: "<!DOCTYPE html>"
        },
        {
            question: "Mit welchen Bock Element kannst du eine hierarchische Überschrift erzeugen?",
            wrongAnswers: ["<p>", "<ul>"],
            correctAnswer: "<h1>"
        },
        {
            question: "Klicke den relativen Pfad an.",
            wrongAnswers: ["/img/img01.png", "https://www.eia1.com/images"],
            correctAnswer: "../../img/img01.png"
        },
        {
            question: "Was heißt HTML ausgeschrieben?",
            wrongAnswers: ["Hyperlink Markup Line", "Hackerspace Management Line"],
            correctAnswer: "Hypertext Markup Language"
        }
    ],
    css: [
        {
            question: "Was ist CSS?",
            wrongAnswers: ["Auszeichnungssprache", "Skriptsprache"],
            correctAnswer: "Gestaltungssprache"
        },
        {
            question: "Was heißt CSS ausgeschrieben?",
            wrongAnswers: [ "Customer Self Service", "Cascading Self Style"],
            correctAnswer: "Cascading Style Sheets"
        },
        {
            question: "Welches ist ein ID Selektor?",
            wrongAnswers: ["<p>", "<...class = “myClass”>"],
            correctAnswer: "<...id = “myID”>"
        },
        {
            question: "Mit welcher Eigenschaft ist es möglich einem Bild einen Rand zu geben?",
            wrongAnswers: ["padding", "margin"],
            correctAnswer: "border"
        },
        {
            question: "Durch welche Positionierung kann eine Box in der linkeren oberen Ecke des Browserfensters bleiben?",
            wrongAnswers: ["absolute", "relative"],
            correctAnswer: "fixed"
        }
    ],
    typescript: [
        {
            question: "Was kann eine Skriptsrache?",
            wrongAnswers: ["Hauptsächlich verwendet werden um Style festzulegen", "Keine Rechnungen machen"],
            correctAnswer: "Den DOM manipulieren"
        },
        {
            question: "Was ist TS?",
            wrongAnswers: ["Auszeichnungssprache", "Gestaltungssprache"],
            correctAnswer: "Skriptsprache"
        },
        {
            question: "Welcher dieser primitiven Datentypen ist eine Zeichenkette?",
            wrongAnswers: ["number", "boolean"],
            correctAnswer: "string"
        },
        {
            question: "Welcher der folgenden nutzt einen Tag-Selektor?",
            wrongAnswers: ["document.querySelector(“#myID”)", "document.querySelector(“.myClass”)"],
            correctAnswer: "document.querySelector(“h2”)"
        },
        {
            question: "Welcher mathematischer Operator wird einer Division zugeteilt?",
            wrongAnswers: ["*", "--"],
            correctAnswer: "/"
        }
    ]
};


// Speichert die ausgewählte Kategorien in variable ab
var category: "html" | "css" | "typescript" | "mixed";

// Speichert die Fragen aus der ausgewählten Kategorie
var selectedQuestions: Question[];

// Speichert die aktuelle korrekte Antwort
var correctAnswer: string;

// Speichert die aktuelle Frage
var currentQuestion: Question;

// Speichert den Punktestand
var score: number = 0; 



// Funktion ruft Id score für Punktestand ab
function updateScore(): void {
    document.getElementById("score").textContent = "Punkte: " + score;
}


// Die folgenden vier Funktionen werden von den Kategorie Buttons ausgelöst
function setHtml(): void {
    category = "html";
    categorySelected();
}

function setCss(): void {
    category = "css";
    categorySelected();
}

function setTypescript(): void {
    category = "typescript";
    categorySelected();
}

function setMixed(): void {
    category = "mixed";
    categorySelected();
}

// Wird ausgeführt wenn der benutzer eine Kategorie ausgewählt hat
function categorySelected(): void {

    // Versteckt den Kategorie screen und zeigt den Quiz screen und die Punkte an
    document.getElementById("category").style.display = "none";
    document.getElementById("quiz").style.display = "";
    document.getElementById("score").style.display = "";

    if (category == "mixed") { // if-else wenn kategorie gemischt ausgewählt alle fragen gemixed werden
        selectedQuestions = [];
        selectedQuestions = selectedQuestions.concat(questions.html);
        selectedQuestions = selectedQuestions.concat(questions.css);
        selectedQuestions = selectedQuestions.concat(questions.typescript);
    } else {
        selectedQuestions = [...questions[category]]; // erstellt eine Kopie des Arrays mit den Fragen
    }

    selectedQuestions = selectedQuestions.sort((a, b) => 0.5 - Math.random()); // mischt das Array
    loadQuestion(); // Frage wird aufgerufen
}


// Lädt eine Frage und zeigt sie an
function loadQuestion(): void {
    currentQuestion = selectedQuestions.shift();
    document.getElementById("question").textContent = currentQuestion.question;
    
    correctAnswer = currentQuestion.correctAnswer; // korrekte antwort
    
    // erstellt ein Array mit den falschen und richtigen antworten
    var allAnswers: string[] = [currentQuestion.correctAnswer];
    for (var i: number = 0; i < currentQuestion.wrongAnswers.length; i++) {
        allAnswers.push(currentQuestion.wrongAnswers[i]);
    }

    // Mischt dieses Array
    allAnswers = allAnswers.sort((a, b) => 0.5 - Math.random());

    // entfernt alle Antwort buttons
    document.getElementById("answers").innerHTML = "";
    
    // Fügt für jede antwort einen Antwort button in das Dokument ein
    for (var j: number = 0; j < allAnswers.length; j++) {
        var newButton: HTMLButtonElement = document.createElement("button");
        newButton.textContent = allAnswers[j];
        newButton.addEventListener("click", clickedAnswer);
        document.getElementById("answers").appendChild(newButton);
    }
}


// Wird von den Antwort buttons ausgelöst
function clickedAnswer(): void {
    // speichert den textinhalt des button, welcher diese Funktion aufgerufen hat
    var givenAnswer: string = this.textContent;
    
    if (givenAnswer == correctAnswer) {
        document.getElementById("correct").textContent = "Korrekt!";
        
        score++;
        updateScore();

        // Wenn 5 Punkte erreicht werden wird zum Endscreen gewechselt
        if (score >= 5) {
            gameEnded();
            return;
        }
    } else {
        // alert("Diese antwort ist leider falsch.");
        document.getElementById("correct").textContent = "Leider Falsch.";
        selectedQuestions.push(currentQuestion);
    }

    // Versteckt das Quiz und zeigt den Screen mit Quellen an
    document.getElementById("quiz").style.display = "none";
    document.getElementById("betweenQuestions").style.display = "";
}

// versteckt den zwischen-screen, zeigt den frage-screen und lädt die nächste Frage
function nextQuestion(): void { // function für nächste frage und antwort
    document.getElementById("betweenQuestions").style.display = "none";
    document.getElementById("quiz").style.display = "";
    loadQuestion();
}

// Versteckt alles und zeigt den Endscreen
function gameEnded(): void { 
    document.getElementById("score").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("endScreen").style.display = "";
}

// Started das spiel neu und Punkte werden auf 0 gesetzt
function restart(): void {
    document.getElementById("endScreen").style.display = "none";
    document.getElementById("category").style.display = "";
    score = 0;
}






// Fügt alle event listener zu den Buttons hinzu

document.getElementById("html").addEventListener("click", setHtml);
document.getElementById("css").addEventListener("click", setCss);
document.getElementById("typescript").addEventListener("click", setTypescript);
document.getElementById("mixed").addEventListener("click", setMixed);

document.getElementById("continue").addEventListener("click", nextQuestion);
document.getElementById("restart").addEventListener("click", restart);