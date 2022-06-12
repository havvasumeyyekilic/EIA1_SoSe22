var L08;
(function (L08) {
    window.addEventListener("load", addClickListenerdrumpad);
    function playSample(soundQUelle) {
        var sound = new Audio(soundQuelle);
        sound.play();
    }
    function addClickListenerDrumpad() {
        document.querySelector(".pad-1").addEventListener("click", function () { playSample("./assets/DP1.mp3"); });
        document.querySelector(".pad-2").addEventListener("click", function () { playSample("./assets/DP2.mp3"); });
        document.querySelector(".pad-3").addEventListener("click", function () { playSample("./assets/DP3.mp3"); });
        document.querySelector(".pad-4").addEventListener("click", function () { playSample("./assets/DP4.mp3"); });
        document.querySelector(".pad-5").addEventListener("click", function () { playSample("./assets/DP5.mp3"); });
        document.querySelector(".pad-6").addEventListener("click", function () { playSample("./assets/DP6.mp3"); });
        document.querySelector(".pad-7").addEventListener("click", function () { playSample("./assets/DP7.mp3"); });
        document.querySelector(".pad-8").addEventListener("click", function () { playSample("./assets/DP8.mp3"); });
        document.querySelector(".pad-9").addEventListener("click", function () { playSample("./assets/DP9.mp3"); });
        document.querySelector(".play").addEventListener("click", function () { playBeat(); });
    }
    ;
    var beat = [
        ".assets/DP1.mp3",
        ".assets/DP2.mp3",
        ".assets/DP3.mp3"
    ];
    var zaehler = 0;
    function playBeat() {
        setInterval(function () {
            playSample(beat[zaehler]);
            zaehler++;
            if (zaehler === 3) {
                zaehler = 0;
            }
        }, 500);
    }
})(L08 || (L08 = {}));
//# sourceMappingURL=drumpad.js.map