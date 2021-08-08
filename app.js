fetch('https://restcountries.eu/rest/v2/all') 
.then(res => res.json())
.then(data => showCountries(data))

const showCountries = countries => {
    const countriesContainer = document.getElementById('countries')

    countries.forEach(country => {
        const name = country.name 
        const capital = country.capital

        const countriesDiv = document.createElement('div')
        countriesDiv.className = 'col'
        const countriesDetail = `
            <h1 class="countryName"> Name: ${name} </h1>
            <h4 class="cityName"> City:  ${capital} </h4>
            <button onclick="seeDetails('${name}')" > See Details </button>
        `
        countriesDiv.innerHTML = countriesDetail 
        countriesContainer.appendChild(countriesDiv)
        
    });
}

function seeDetails(countryName){
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`
    fetch(url)
    .then(res => res.json())
    .then(data => countriesInfo(data))
}

const countriesInfo = countryInfo => {
    const detailsDiv = document.getElementById('countries-info')
    const showInfo = countryInfo[0]
    const language = showInfo.languages[0]

    detailsDiv.innerHTML = `
        <h1> Name:  ${showInfo.name} <h1>
        <h2> Region:  ${showInfo.region} </h2>
        <h3> Area:  ${showInfo.area} </h3>
        <img class="flag" src="${showInfo.flag}">
        <p> Language:  ${language.name} </p>
    `
}