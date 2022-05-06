// "Die Einwohnerzahl in Europa beträgt im Jahr 2022: XXX Mio." "Relativ zur Gesamtzahl der Einwohnerzahl in der EU ist die Einwohnerzahl in Deutschland im Jahr 2022: XXX %" "Für Deutschland hat sich die Einwohnerzahl im Jahr 2022 im Vergleich zu 2008 um XXX % verändert"
const deutschland2008 = 82;
const deutschland2022 = 83.2;
const frankreich2008 = 62.14;
const frankreich2022 = 65.48;
const italien2008 = 59;
const italien2022 = 59.53;
const niederlande2008 = 16.41;
const niederlande2022 = 17.51;
const europa2022 = 447.01;
const deutschland2022Anteileuropa2022 = deutschland2022 / europa2022 * 100;
const frankreich2022Anteileuropa2022 = frankreich2022 / europa2022 * 100;
const italien2022Anteileuropa2022 = italien2022 / europa2022 * 100;
const niederlande2022Anteileuropa2022 = niederlande2022 / europa2022 * 100;
const deutschlandDifferenz = deutschland2022 - deutschland2008;
const deutschlandWachstum2008 = deutschlandDifferenz / deutschland2022 * 100;
const frankreichDifferenz = frankreich2022 - frankreich2008;
const frankreichWachstum2008 = frankreichDifferenz / frankreich2022 * 100;
const italienDifferenz = italien2022 - italien2008;
const italienWachstum2008 = italienDifferenz / italien2022 * 100;
const niederlandeDifferenz = niederlande2022 - niederlande2008;
const niederlandeWachstum2008 = niederlandeDifferenz / niederlande2022 * 100;
console.log("Gesamtzahl EinwohnerInnen in Deutschland in 2022" + ": " + deutschland2022 + "Mio.");
console.log("Relativ zu Gesamtzahl in der EU 2022" + ":" + " " + deutschland2022Anteileuropa2022 + "%");
console.log("Wachstumsrate in Deutschland seit 2008" + ":" + " " + deutschlandWachstum2008 + "%");
console.log("Gesamtzahl EinwohnerInnen in Frankreich in 2022" + ": " + frankreich2022 + "Mio.");
console.log("Relativ zu Gesamtzahl in der EU 2022" + ":" + " " + frankreich2022Anteileuropa2022 + "%");
console.log("Wachstumsrate in Frankreich seit 2008" + ":" + " " + frankreichWachstum2008 + "%");
console.log("Gesamtzahl EinwohnerInnen in Italien in 2022" + ": " + italien2022 + "Mio.");
console.log("Relativ zu Gesamtzahl in der EU 2022" + ":" + " " + italien2022Anteileuropa2022 + "%");
console.log("Wachstumsrate in Italien seit 2008" + ":" + " " + italienWachstum2008 + "%");
console.log("Gesamtzahl EinwohnerInnen in Niederlande in 2022" + ": " + niederlande2022 + "Mio.");
console.log("Relativ zu Gesamtzahl in der EU 2022" + ":" + " " + niederlande2022Anteileuropa2022 + "%");
console.log("Wachstumsrate in Niederlande seit 2008" + ":" + " " + niederlandeWachstum2008 + "%");
//# sourceMappingURL=script.js.map