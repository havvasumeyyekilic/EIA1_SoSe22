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
    const europa2008: number = 440.66;

    const land01: string = "Deutschland";
    const land02: string = "Frankreich";
    const land03: string = "Italien";
    const land04: string = "Niederlande";

    const anteileuInEU: number = europa2022 / europa2022 * 100;
    const anteildeInEU: number = deutschland2022 / europa2022 * 100;
    const anteilfrInEU: number = frankreich2022 / europa2022 * 100;
    const anteilitInEU: number = italien2022 / europa2022 * 100;
    const anteilnlInEU: number = niederlande2022 / europa2022 * 100;

    const wachstumeuSeit2008inProzent: number = (europa2022 - europa2008) / europa2008;
    const wachstumdeSeit2008inProzent: number = (deutschland2022 - deutschland2008) / deutschland2008;
    const wachstumfrSeit2008inProzent: number = (frankreich2022 - frankreich2008) / frankreich2008;
    const wachstumitSeit2008inProzent: number = (italien2022 - italien2008) / italien2008;
    const wachstumnlSeit2008inProzent: number = (niederlande2022 - niederlande2008) / niederlande2008;

    const differenzeu08und22: number = europa2022 - europa2008;
    const differenzde08und22: number = deutschland2022 - deutschland2008;
    const differenzfr08und22: number = frankreich2022 - frankreich2008;
    const differenzit08und22: number = italien2022 - italien2008;
    const differenznl08und22: number = niederlande2022 - niederlande2008;

}

// Doc Query Select - EventListener aus EIA1 Vorlesung ergänzt //

function Deutschland() {
    document.querySelector("einwohnerzahl").innerHTML = "Einwohnerzahl in Deutschland";
    document.querySelector(".chart").setAttribute("style", "height" + anteildeInEU);
    document.querySelector(".germany").setAttribute("style", "opacity:1");
    document.getElementById("gesamtzahleinwohner").innerHTML = europa2022 + "Mio.";
    document.getElementById("info").innerHTML = "Gesamtzahl EinwohnerInnen in Deutschland in 2022";
    document.getElementById("relativgesamtzahl").innerHTML = anteildeInEU.toFixed(2) + "%";
    document.getElementById("wachstumsrate").innerHTML = wachstumdeSeit2008inProzent.toFixed(2) + "%";
    document.getElementById("differenz").innerHTML = differenzde08und22.toFixed(2) + "Mio.";

    document.querySelector(".chart").setAttribute("style", "height:" + anteildeInEU + "%");
}

function Frankreich() {
    document.querySelector("einwohnerzahl").innerHTML = "Einwohnerzahl in Frankreich";
    document.querySelector(".chart").setAttribute("style", "height" + anteilfrInEU);
    document.querySelector(".france").setAttribute("style", "opacity:1");
    document.getElementById("gesamtzahleinwohner").innerHTML = europa2022 + "Mio.";
    document.getElementById("info").innerHTML = "Gesamtzahl EinwohnerInnen in Frankreich in 2022";
    document.getElementById("relativgesamtzahl").innerHTML = anteilfrInEU.toFixed(2) + "%";
    document.getElementById("wachstumsrate").innerHTML = wachstumfrSeit2008inProzent.toFixed(2) + "%";
    document.getElementById("differenz").innerHTML = differenzfr08und22.toFixed(2) + "Mio.";

    document.querySelector(".chart").setAttribute("style", "height:" + anteilfrInEU + "%");
}

function Italien() {
    document.querySelector("einwohnerzahl").innerHTML = "Einwohnerzahl in Italien";
    document.querySelector(".chart").setAttribute("style", "height" + anteilitInEU);
    document.querySelector(".italy").setAttribute("style", "opacity:1");
    document.getElementById("gesamtzahleinwohner").innerHTML = europa2022 + "Mio.";
    document.getElementById("info").innerHTML = "Gesamtzahl EinwohnerInnen in Italien in 2022";
    document.getElementById("relativgesamtzahl").innerHTML = anteilitInEU.toFixed(2) + "%";
    document.getElementById("wachstumsrate").innerHTML = wachstumitSeit2008inProzent.toFixed(2) + "%";
    document.getElementById("differenz").innerHTML = differenzit08und22.toFixed(2) + "Mio.";

    document.querySelector(".chart").setAttribute("style", "height:" + anteilitInEU + "%");
}

function Niederlande() {
    document.querySelector("einwohnerzahl").innerHTML = "Einwohnerzahl in Niederlande";
    document.querySelector(".chart").setAttribute("style", "height" + anteilnlInEU);
    document.querySelector(".netherlands").setAttribute("style", "opacity:1");
    document.getElementById("gesamtzahleinwohner").innerHTML = europa2022 + "Mio.";
    document.getElementById("info").innerHTML = "Gesamtzahl EinwohnerInnen in Niederlande in 2022";
    document.getElementById("relativgesamtzahl").innerHTML = anteilnlInEU.toFixed(2) + "%";
    document.getElementById("wachstumsrate").innerHTML = wachstumnlSeit2008inProzent.toFixed(2) + "%";
    document.getElementById("differenz").innerHTML = differenznl08und22.toFixed(2) + "Mio.";

    document.querySelector(".chart").setAttribute("style", "height:" + anteilnlInEU + "%");
}

function Europa() {
    document.querySelector("einwohnerzahl").innerHTML = "Einwohnerzahl in Europa";
    document.querySelector(".chart").setAttribute("style", "height" + anteileuInEU);
    document.querySelector(".europe").setAttribute("style", "opacity:1");
    document.getElementById("gesamtzahleinwohner").innerHTML = europa2022 + "Mio.";
    document.getElementById("info").innerHTML = "Gesamtzahl EinwohnerInnen in Europa in 2022";
    document.getElementById("relativgesamtzahl").innerHTML = anteileuInEU.toFixed(2) + "%";
    document.getElementById("wachstumsrate").innerHTML = wachstumeuSeit2008inProzent.toFixed(2) + "%";
    document.getElementById("differenz").innerHTML = differenzeu08und22.toFixed(2) + "Mio.";

    document.querySelector(".chart").setAttribute("style", "height:" + anteileuInEU + "%");
}


window.addEventListener("load", function() {
    document.querySelector("chartStarWrapper").addEventListener("click", Europa);
    document.querySelector(".deutschland").addEventListener("click", Deutschland);
    document.querySelector(".frankreich").addEventListener("click", Frankreich);
    document.querySelector(".italien").addEventListener("click", Italien);
    document.querySelector(".niederlande").addEventListener("click", Niederlande);
    document.querySelector(".stars").setAttribute("style", "opacity: " + "o.5";)
});

