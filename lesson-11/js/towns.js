const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];

    src = ['preson-images/soda-springs-resize.jpg', 'preson-images/fish-haven-resize.jpg', 'preson-images/preston-resize.jpg']
    srcIndex = 0

    for (let i = 0; i < towns.length; i++) { //(how would you do this with a foreach method?)
        if (i === 0 || i === 2 || i === 6) {
            //create elements
            let card = document.createElement('article');
            let div = document.createElement('div')
            let h3 = document.createElement('h3');
            let h5 = document.createElement('h5');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let divImg = document.createElement('div')
            let img = document.createElement('img')

            //append elements
            document.querySelector('main.towns').appendChild(card);
            card.appendChild(div);
            div.appendChild(h3);
            div.appendChild(h5);
            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);
            card.appendChild(divImg);
            divImg.appendChild(img);

            //element contents
            h3.textContent = towns[i].name;
            h5.textContent = `"${towns[i].motto}"`;
            p1.textContent = `Year Founded: ${towns[i].yearFounded}`;
            p2.textContent = `Population: ${towns[i].currentPopulation}`;
            p3.textContent = `Average Rainfall: ${towns[i].averageRainfall}`;
            img.setAttribute('src', src[srcIndex]);
            img.setAttribute('alt', 'Image of ' + towns[i].name)
            srcIndex += 1;

            //create classes
            let cardClass = towns[i].name
            cardClass = cardClass.replace(' ', '-')
            card.setAttribute('class', cardClass.toLowerCase())
            let divClass = towns[i].name + '-div'
            divClass = divClass.replace(' ', '-')
            div.setAttribute('class', divClass.toLowerCase())
            let divImgClass = towns[i].name + '-div-img'
            divImgClass = divImgClass.replace(' ', '-')
            divImg.setAttribute('class', divImgClass.toLowerCase())
        } 
    }
});
