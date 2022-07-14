const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=42.0372&lon=111.3960&appid=c78aa2048fa7d286e4c1c542c60adca2&units=imperial"

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

const forcastURL = "http://api.openweathermap.org/data/2.5/forecast?lat=42.0372&lon=111.3960&cnt=40&appid=c78aa2048fa7d286e4c1c542c60adca2&units=imperial"
fetch(forcastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        //run loop to display 5 day forcast
        let divFiveDay = document.createElement('div');
        document.querySelector('div.five-day-forcast').appendChild(divFiveDay);
        divFiveDay.setAttribute('class', 'five-day-forcast-data');
        for (let i = 0; i < 40; i++) {
            let timeCheck = '18:00:00'
            if (jsObject.list[i].dt_txt.includes(timeCheck)) {
                let weekday = new Date(jsObject.list[i].dt_txt).toLocaleString('en-us', { weekday: 'long' });
                //console.log(weekday);
                let imgSRC = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png'
                //make elements and create classes if needed
                let divDay = document.createElement('div');
                divDay.setAttribute('class', 'day-forcast');
                let h3 = document.createElement('h3');
                let divImg = document.createElement('div');
                let img = document.createElement('img');
                let p1 = document.createElement('p');
                let strong = document.createElement('strong');
                let p2 = document.createElement('p');
              
                //text content
                h3.textContent = weekday;
                img.setAttribute('src', imgSRC);
                img.setAttribute('alt', 'Weather Icon');
                strong.textContent = jsObject.list[i].weather[0].main;
                p2.textContent = jsObject.list[i].main.temp.toFixed(0) + '° F';

                //append elements
                document.querySelector('div.five-day-forcast-data').appendChild(divDay);
                divDay.appendChild(h3);
                divDay.appendChild(divImg);
                divDay.appendChild(img);
                divImg.appendChild(p1);
                p1.appendChild(strong);
                divDay.appendChild(p2);
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
    
        FISH_HAVEN_INDEX = 2;
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
        p1.textContent = towns[FISH_HAVEN_INDEX].events[0];
        p2.textContent = towns[FISH_HAVEN_INDEX].events[1];
        p3.textContent = towns[FISH_HAVEN_INDEX].events[2];
      });
