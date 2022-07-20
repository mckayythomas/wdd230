const requestURL = 'https://mckayythomas.github.io/scoots/js/scoots.json';

fetch(requestURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)
        for (let i = 0; i < 6; i++) {
            // MAKE ELEMENTS
            let card = document.createElement('div');
            let model = document.createElement('h2');
            let people = document.createElement('h4');
            let prices = document.createElement('h2');
            let reservationsDiv = document.createElement('div');
            let reservations = document.createElement('h3');
            let halfDayR = document.createElement('p');
            let wholeDayR = document.createElement('p');
            let walkInDiv = document.createElement('div');
            let walkIn = document.createElement('h3');
            let halfDayW = document.createElement('p');
            let wholeDayW = document.createElement('p');
            let picture = document.createElement('picture');
            let img = document.createElement('img');
            let divContent = document.createElement('div');

            // APPEND ITEMS
            document.querySelector('div.rentals').appendChild(card);
            card.appendChild(divContent);
            divContent.appendChild(model);
            divContent.appendChild(people);
            divContent.appendChild(prices);
            divContent.appendChild(reservationsDiv);
            reservationsDiv.appendChild(reservations);
            reservationsDiv.appendChild(halfDayR);
            reservationsDiv.appendChild(wholeDayR);
            divContent.appendChild(walkInDiv);
            walkInDiv.appendChild(walkIn);
            walkInDiv.appendChild(halfDayW);
            walkInDiv.appendChild(wholeDayW);
            card.appendChild(picture);
            picture.appendChild(img);

            // MAKE TEXT
            model.textContent = jsObject.rentals[i].model;
            people.textContent = `Seats ${jsObject.rentals[i].maxpersons} People`;
            prices.textContent = "Prices";
            reservations.textContent = "Reservations";
            halfDayR.textContent = `Half day - ${jsObject.rentals[i].price[0].reservation.halfday}`;
            wholeDayR.textContent = `Full Day - ${jsObject.rentals[i].price[0].reservation.fullday}`;
            walkIn.textContent = "Walk In";
            halfDayW.textContent = `Half Day - ${jsObject.rentals[i].price[0].walkin.halfday}`;
            wholeDayW.textContent = `Full Day - ${jsObject.rentals[i].price[0].walkin.fullday}`;
            card.setAttribute('class', `card${i}`);
            img.setAttribute('src', jsObject.rentals[i].img);
            img.setAttribute('alt', `Image of ${jsObject.rentals[i].model}`);
            divContent.setAttribute('class', `info`)
            reservationsDiv.setAttribute('class', 'reservations-price')
            walkInDiv.setAttribute('class', 'walkin-price')
        }
    });
