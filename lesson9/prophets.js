const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];

    for (let i = 0; i < prophets.length; i++) { //(how would you do this with a foreach method?)
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      card.appendChild(h2);
      document.querySelector('div.cards').appendChild(card);
      //Birthdate
      let p1 = document.createElement('p');
      p1.textContent = 'Birthdate: ' + prophets[i].birthdate;
      //Place of Birth
      p2 = document.createElement('p');
      p2.textContent = 'Birth Place: ' + prophets[i].birthplace;
      //Img
      img = document.createElement('img');
      img.setAttribute('src', prophets[i].imageurl)
      img.setAttribute('alt', prophets[i].name + prophets[i].lastname + prophets[i].order);
      //Append items to make the new card
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(img);
    }
  });






