namespace L08 {
window.addEventListener("load", addClickListenerdrumpad);

function playSample(soundQUelle: string): void {

    var sound: HTMLAudioElement = new Audio(soundQuelle);
    sound.play();
}

function addClickListenerDrumpad(): void {
    document.querySelector(".pad-1").addEventListener("click", function (): void { playSample("./assets/DP1.mp3"); });
    document.querySelector(".pad-2").addEventListener("click", function (): void { playSample("./assets/DP2.mp3"); });
    document.querySelector(".pad-3").addEventListener("click", function (): void { playSample("./assets/DP3.mp3"); });
    document.querySelector(".pad-4").addEventListener("click", function (): void { playSample("./assets/DP4.mp3"); });
    document.querySelector(".pad-5").addEventListener("click", function (): void { playSample("./assets/DP5.mp3"); });
    document.querySelector(".pad-6").addEventListener("click", function (): void { playSample("./assets/DP6.mp3"); });
    document.querySelector(".pad-7").addEventListener("click", function (): void { playSample("./assets/DP7.mp3"); });
    document.querySelector(".pad-8").addEventListener("click", function (): void { playSample("./assets/DP8.mp3"); });
    document.querySelector(".pad-9").addEventListener("click", function (): void { playSample("./assets/DP9.mp3"); });
    document.querySelector(".play").addEventListener("click", function (): void { playBeat(); });

};

var beat: string[] = [
    ".assets/DP1.mp3",
    ".assets/DP2.mp3",
    ".assets/DP3.mp3"
];

var zaehler: number = 0;

function playBeat(): void {
    setInterval(function (): void {
        playSample (beat[zaehler]);
        zaehler ++;
        if (zaehler === 3) {
            zaehler = 0;
        }
    }, 500);
}
}