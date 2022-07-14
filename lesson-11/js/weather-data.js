const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=c78aa2048fa7d286e4c1c542c60adca2&units=imperial"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.getElementById('temp').textContent = jsObject.main.temp.toFixed(0);
        document.getElementById('humidity').textContent = ' ' + jsObject.main.humidity + '%';
        document.getElementById('windSpeed').textContent = jsObject.wind.speed;
        document.getElementById('condition').textContent = ' ' + jsObject.weather[0].main;

        let windChill = 0
        let temp = jsObject.main.temp.toFixed(0);
        let windSpeed = jsObject.wind.speed;
        if (temp < 50 && windSpeed > 3) {
            windChill = 35.74 + 0.6215 * temp - 35.75 * windSpeed ** .16 + .4275 * temp * windSpeed ** .16;
            windChill = windChill.toFixed(0) + ' mph';
        }
        else { windChill = 'N/A'; }
        document.getElementById("windChill").innerHTML = windChill;

    });

const forcastURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&cnt=40&appid=c78aa2048fa7d286e4c1c542c60adca2&units=imperial"
fetch(forcastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        //run loop to display 5 day forcast
        let dayIndex = 1;
        for (let i = 0; i < 40; i++) {
            let timeCheck = '18:00:00'
            if (jsObject.list[i].dt_txt.includes(timeCheck)) {
                let weekday = new Date(jsObject.list[i].dt_txt).toLocaleString('en-us', { weekday: 'long' });
                //console.log(weekday);
                let dayId = String('day' + dayIndex);
                let dayTempId = String('day' + dayIndex + '-temp');
                let dayConditionId = String('day' + dayIndex + '-condition');
                let dayImageId = String('day' + dayIndex + '-img');
                let imgSRC = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png'

                document.getElementById(dayId).innerText = weekday;
                document.getElementById(dayTempId).innerText = jsObject.list[i].main.temp.toFixed(0) + '° F';
                document.getElementById(dayConditionId).innerText = jsObject.list[i].weather[0].main;
                document.getElementById(dayImageId).setAttribute('src', imgSRC)

                //console.log(dayClass, dayTempClass, dayConditionClass);
                dayIndex += 1;




            }   
        }
    });

const townApi = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(townApi)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];

    PRESTON_INDEX = 6;
    // create elements 
    let card = document.createElement('div');
    let h2 = document.createElement('h2');
    let hr = document.createElement('hr');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');

    // Append elements
    document.querySelector('div.town-events').appendChild(card)
    card.appendChild(h2);
    card.appendChild(hr);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);

    // create text content
    h2.textContent = 'Upcoming Events:';
    p1.textContent = towns[PRESTON_INDEX].events[0];
    p2.textContent = towns[PRESTON_INDEX].events[1];
    p3.textContent = towns[PRESTON_INDEX].events[2];
  });