"use strict";
var L08_Skipiste;
(function (L08_Skipiste) {
    window.addEventListener("load", handleload);
    let crc2;
    let golden = 0.62;
    function handleload(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        drawBackground();
        drawSun({ x: 100, y: 25 });
        drawCloud({ x: 190, y: 80 }, { x: 50, y: 25 });
        drawPiste();
        drawTree();
        drawSnow({ x: 300, y: 600 }, { x: 600, y: 600 });
    }
    function drawBackground() {
        console.log("Zeichne Hintergrund");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "darkblue");
        gradient.addColorStop(golden, "lightblue");
        gradient.addColorStop(1, "white");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Zeichne Sonne", _position);
        let r1 = 30;
        let r2 = 80;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(80, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(80, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Wolke", _position, _size);
        let nParticles = 20;
        let radiusParticle = 20;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 0.7)");
        gradient.addColorStop(0, "HSLA(60, 100%, 100%, 0.3)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawPiste() {
        crc2.fillStyle = "white";
        crc2.strokeStyle = "white";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, 600);
        crc2.lineTo(300, 600);
        crc2.lineTo(0, 200);
        crc2.lineTo(0, 0);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.restore();
    }
    function drawTree() {
        console.log("Bäumchen");
        crc2.fillStyle = "green";
        crc2.strokeStyle = "green";
        crc2.beginPath();
        crc2.moveTo(30, 350);
        crc2.lineTo(20, 370);
        crc2.lineTo(25, 370);
        crc2.lineTo(15, 390);
        crc2.lineTo(20, 390);
        crc2.lineTo(10, 410);
        crc2.lineTo(50, 410);
        crc2.lineTo(40, 390);
        crc2.lineTo(35, 390);
        crc2.lineTo(45, 390);
        crc2.lineTo(35, 370);
        crc2.lineTo(40, 370);
        crc2.lineTo(45, 370);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawSnow(_position, _size) {
        console.log("Schneeflöckchen", _position, _size);
        let nParticles = 500;
        let radiusParticle = 2;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "Azure");
        gradient.addColorStop(0, "lightgrey");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
})(L08_Skipiste || (L08_Skipiste = {}));
//# sourceMappingURL=Aufgabe008.js.map