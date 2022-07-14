function windChill() {
    let windChill = 0
    let temp = parseFloat(document.getElementById("temp").innerHTML);
    let windSpeed = parseFloat(document.getElementById("windSpeed").innerHTML);
    if (temp < 50 && windSpeed > 3) {
    windChill = 35.74 + 0.6215 * temp - 35.75 * windSpeed**.16 + .4275 * temp * windSpeed ** .16;
    windChill = windChill.toFixed(0) + ' mph';}
    else {windChill = 'N/A';}
    document.getElementById("windChill").innerHTML = windChill;
}