var L09;
(function (L09) {
    window.addEventListener("load", addClickListenerDrumpad);
    window.addEventListener("load", addClickListenerKey);
    function playSample(soundQuelle) {
        var sound = new Audio(soundQuelle);
        sound.play();
        if (playBeat.getAttribute("class") == "fa-stop") {
            playBeat.setAttribute("class", "fa-play");
        }
        else {
            playBeat.setAttribute("class", "fa-stop");
            {
                sound.pause();
            }
        }
    }
    function addClickListenerDrumpad() {
        document.querySelector(".pad-1").addEventListener("click", function () { playSample("./assets/DP1.mp3"); }); //0
        document.querySelector(".pad-2").addEventListener("click", function () { playSample("./assets/DP2.mp3"); }); //1
        document.querySelector(".pad-3").addEventListener("click", function () { playSample("./assets/DP3.mp3"); }); //2
        document.querySelector(".pad-4").addEventListener("click", function () { playSample("./assets/DP4.mp3"); }); //3
        document.querySelector(".pad-5").addEventListener("click", function () { playSample("./assets/DP5.mp3"); }); //4
        document.querySelector(".pad-6").addEventListener("click", function () { playSample("./assets/DP6.mp3"); }); //5
        document.querySelector(".pad-7").addEventListener("click", function () { playSample("./assets/DP7.mp3"); }); //6
        document.querySelector(".pad-8").addEventListener("click", function () { playSample("./assets/DP8.mp3"); }); //7
        document.querySelector(".pad-9").addEventListener("click", function () { playSample("./assets/DP9.mp3"); }); //8
        document.querySelector(".play").addEventListener("click", function () { playBeat(); });
        document.querySelector(".shuffle").addEventListener("click", function () { playButton(); });
    }
    var beat = [
        ".assets/DP1.mp3",
        ".assets/DP2.mp3",
        ".assets/DP3.mp3"
    ];
    var zaehler = 0;
    function shuffle() {
        for (var i = 0; i < 3; i++) {
            zaehler = Math.floor(Math.random() * beat.length);
        }
    }
    function playBeat() {
        setInterval(function () {
            playSample(beat[zaehler]);
            zaehler++;
            if (zaehler === 3) {
                zaehler = 0;
            }
        }, 500);
    }
})(L09 || (L09 = {}));
//# sourceMappingURL=drumpad.js.map