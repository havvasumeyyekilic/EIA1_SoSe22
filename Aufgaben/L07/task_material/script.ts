namespace L07 {
    const deutschland2008: number = 82;
    const deutschland2022: number = 83.2;

    const frankreich2008: number = 62.14;
    const frankreich2022: number = 65.48;

    const italien2008: number = 59;
    const italien2022: number = 65.48;

    const niederlande2008: number = 16.41;
    const niederlande2022: number = 17.51;

    const europa2022: number = 447.01;
    const europa208: number = 440.66;

    const land01: string = "Deutschland";
    const land02: string = "Frankreich";
    const land03: string = "Italien";
    const land04: string = "Niederlande";

    const text1: string = "Gesamtzahl Einwohnerinnen und Einwohner in";
    const text2: string = "in 2022";
}

// EU BERECHNUNG //
function Europa() {
    const europa2022: number = 447.01;
    const europa2008: number = 440.66;
    const anteilInEU: number = europa2022;
    const wachstumSeit2008inProzent: number = (europa2022 - europa2008) / europa2008;
    const differenz08und22: number = europa2022 - europa2008;
}

// DEUTSCHLAND BERECHNUNG //
function Deutschland() {
    const deutschland2008: number = 82;
    const deutschland2022: number = 83.2;
    const europa2022: number = 447.01;

    const anteilInEU: number = deutschland2022 / europa2022;
    const wachstumSeit2008inProzent: number = (deutschland2022 - deutschland2008) / deutschland2008;
    const differenz08und22: number = deutschland2022 - deutschland2008;

}

// FRANCE BERECHNUNG //
function Frankreich() {
    const frankreich2008: number = 62.14;
    const frankreich2022: number = 65.48;
    const europa2022: number = 447.01;

    const anteilInEU: number = frankreich2022 / europa2022;
    const wachstumSeit2008inProzent: number = (frankreich2022 - frankreich2008) / frankreich2008;
    const differenz08und22: number = frankreich2022 - frankreich2008;

}

// ITALY BERECHNUNG //
function Italien() {
    const italien2008: number = 59;
    const italien2022: number = 65.48;
    const europa2022: number = 447.01;

    const anteilInEU: number = italien2022 / europa2022;
    const wachstumSeit2008inProzent: number = (italien2022 - italien2008) / italien2008;
    const differenz08und22: number = italien2022 - italien2008;

}


// NETHERL BERECHNUNG //
function Niederlande() {
    const niederlande2008: number = 16.41;
    const niederlande2022: number = 17.51;
    const europa2022: number = 447.01;

    const anteilInEU: number = niederlande2022 / europa2022;
    const wachstumSeit2008inProzent: number = (niederlande2022 - niederlande2008) / niederlande2008;
    const differenz08und22: number = niederlande2022 - niederlande2008;

}


// Doc Query Select - EventListener aus EIA1 Vorlesung ergänzt //
window.addEventListener('load', function()) {
    document.querySelector("chartStarWrapper").addEventListener('click', Europa,);
    document.querySelector(".deutschland").addEventListener('click', Deutschland,);
    document.querySelector(".frankreich").addEventListener('click', Frankreich,);
    document.querySelector(".italien").addEventListener('click', Italien,);
    document.querySelector(".Niederlande").addEventListener('click', Niederlande,);
}

