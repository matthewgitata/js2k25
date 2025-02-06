"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
};

const renderCountry = function (data, className = "") {
  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.languages[0].name}</p>
          </div>
        </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
};

const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0]);
      const neighbor = data[0].borders?.[0];

      if (!neighbor) return;

      //   Country 2
      fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`);
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data, "neighbor"))
    .catch((err) => {
      console.error(`error: ${err}`);
      renderError(`Something went wrong ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", function () {
  getCountryData("portugal");
});
