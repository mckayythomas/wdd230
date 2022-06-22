function toggleMenu() {
    document.getElementsByClassName("navigation")[0]
    .classList.toggle("responsive");
}

function pancakes() {
    let date = new Date();
    let day = date.getDay();
    console.log(day);
    if (day === 6) {
        document.getElementById("pancakes").className = "display";
        document.getElementById("weatherSummary").className = "weather-summary-saturday";
    }

}
