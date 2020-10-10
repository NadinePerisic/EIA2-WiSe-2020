"use strict";
window.addEventListener("load", myFunction);
function myFunction() {
    var person = prompt("Trage deinen Vornamen ein");
    if (person != null) {
        document.getElementById("popUp").innerHTML =
            "Hallöchen   " + person + " wie geht es dir?  Bist du berreit für EIA2?";
    }
}
//# sourceMappingURL=miniaufgabe.js.map