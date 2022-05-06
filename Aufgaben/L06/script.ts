// "Die Einwohnerzahl in Europa beträgt im Jahr 2022: XXX Mio." "Relativ zur Gesamtzahl der Einwohnerzahl in der EU ist die Einwohnerzahl in Deutschland im Jahr 2022: XXX %" "Für Deutschland hat sich die Einwohnerzahl im Jahr 2022 im Vergleich zu 2008 um XXX % verändert"

const deutschland2008: number = 82;
const deutschland2022: number = 83.2;
const frankreich2008: number = 62.14;
const frankreich2022: number = 65.48;
const italien2008: number = 59;
const italien2022: number = 59.53;
const niederlande2008: number = 16.41;
const niederlande2022: number = 17.51;
const europa2022: number = 447.01;

const deutschland2022Anteileuropa2022: number = deutschland2022 / europa2022 * 100;
const frankreich2022Anteileuropa2022: number = frankreich2022 / europa2022 * 100;
const italien2022Anteileuropa2022: number = italien2022 / europa2022 * 100;
const niederlande2022Anteileuropa2022: number = niederlande2022 / europa2022 * 100;


const deutschlandDifferenz: number = deutschland2022 - deutschland2008;
const deutschlandWachstum2008: number = deutschlandDifferenz / deutschland2022 * 100;

const frankreichDifferenz: number = frankreich2022 - frankreich2008;
const frankreichWachstum2008: number = frankreichDifferenz / frankreich2022 * 100;

const italienDifferenz: number = italien2022 - italien2008;
const italienWachstum2008: number = italienDifferenz / italien2022 * 100;

const niederlandeDifferenz: number = niederlande2022 - niederlande2008;
const niederlandeWachstum2008: number = niederlandeDifferenz / niederlande2022 * 100;

console.log("Gesamtzahl EinwohnerInnen in Deutschland in 2022" + ": "  + deutschland2022 + "Mio.");
console.log("Relativ zu Gesamtzahl in der EU 2022" + ":" + " " + deutschland2022Anteileuropa2022 + "%");
console.log("Wachstumsrate in Deutschland seit 2008" + ":" + " " + deutschlandWachstum2008 + "%");

console.log("Gesamtzahl EinwohnerInnen in Frankreich in 2022" + ": "  + frankreich2022 + "Mio.");
console.log("Relativ zu Gesamtzahl in der EU 2022" + ":" + " " + frankreich2022Anteileuropa2022 + "%");
console.log("Wachstumsrate in Frankreich seit 2008" + ":" + " " + frankreichWachstum2008 + "%");

console.log("Gesamtzahl EinwohnerInnen in Italien in 2022" + ": "  + italien2022 + "Mio.");
console.log("Relativ zu Gesamtzahl in der EU 2022" + ":" + " " + italien2022Anteileuropa2022 + "%");
console.log("Wachstumsrate in Italien seit 2008" + ":" + " " + italienWachstum2008 + "%");

console.log("Gesamtzahl EinwohnerInnen in Niederlande in 2022" + ": "  + niederlande2022 + "Mio.");
console.log("Relativ zu Gesamtzahl in der EU 2022" + ":" + " " + niederlande2022Anteileuropa2022 + "%");
console.log("Wachstumsrate in Niederlande seit 2008" + ":" + " " + niederlandeWachstum2008 + "%");
