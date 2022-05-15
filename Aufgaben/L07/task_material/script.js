const land01 = "Deutschland";
const deutschland08 = 82;
const deutschland22 = 83.2;
const land02 = "Frankreich";
const frankreich08 = 62.14;
const frankreich22 = 65.48;
const land03 = "Italien";
const italien08 = 59;
const italien22 = 65.48;
const land04 = "Niederlande";
const niederlande08 = 16.41;
const niederlande22 = 17.51;
const europa22 = 447.01;
const jahr = 2022;
function gesamtzahl(land, land22) {
    console.log("Gesamtzahl EinwohnerInnen in " + land + " " + jahr + ": " + land22 + "Mio.");
}
;
gesamtzahl(land01, deutschland22);
gesamtzahl(land02, frankreich22);
gesamtzahl(land03, italien22);
gesamtzahl(land04, niederlande22);
function anteilEuropa22(jahr, land22, land) {
    const berechnungnr1 = land22 / europa22 * 100;
    console.log("Relativ zur Gesamtzahl in der EU " + jahr + ": " + berechnungnr1 + "%" + " in" + land);
}
;
anteilEuropa22(jahr, deutschland22, land01);
anteilEuropa22(jahr, frankreich22, land02);
anteilEuropa22(jahr, italien22, land03);
anteilEuropa22(jahr, niederlande22, land04);
function wachstum(land22, land08, land) {
    const berechnungnr2 = land22 - land08;
    const berechnungnr3 = berechnungnr2 / land22 * 100;
    console.log("Wachstumsrate in " + land + " seit 2008: " + berechnungnr3 + "%");
}
;
wachstum(deutschland22, deutschland08, land01);
wachstum(frankreich22, frankreich08, land02);
wachstum(italien22, italien08, land03);
wachstum(niederlande22, niederlande08, land04);
document.querySelector("#deutschland").addEventListener("click", bildClicked1);
function bildClicked1() {
    document.querySelector(".einwohnerzahl").innerHTML = "Einwohnerzahl in Deutschland";
}
;
document.querySelector("#frankreich").addEventListener("click", bildClicked2);
function bildClicked2() {
    document.querySelector(".einwohnerzahl").innerHTML = "Einwohnerzahl in Frankreich";
}
;
document.querySelector("#italien").addEventListener("click", bildClicked3);
function bildClicked3() {
    document.querySelector(".einwohnerzahl").innerHTML = "Einwohnerzahl in Italien";
}
;
document.querySelector("#niederlande").addEventListener("click", bildClicked4);
function bildClicked4() {
    document.querySelector(".einwohnerzahl").innerHTML = "Einwohnerzahl in Niederlande";
}
;
//# sourceMappingURL=script.js.map