const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=c78aa2048fa7d286e4c1c542c60adca2&units=imperial"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);

        document.getElementById('temp').textContent = jsObject.main.temp.toFixed(0);
        document.getElementById('humidity').textContent = ' ' + jsObject.main.humidity + '%';
        document.getElementById('condition').textContent = ' ' + jsObject.weather[0].main;
    });

    const forcastURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&cnt=40&appid=c78aa2048fa7d286e4c1c542c60adca2&units=imperial"
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
                    divImg.appendChild(img);
                    divDay.appendChild(p1);
                    p1.appendChild(strong);
                    divDay.appendChild(p2);
                }   
            }
        });
    