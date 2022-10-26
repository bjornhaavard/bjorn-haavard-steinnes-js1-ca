// import { getThePlanets } from "/js/index.js";

const getPlanetDetailsHtml = document.querySelector("detailsContainer");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if (id === null) {
  location.href = "/";
}

console.log(id);

const url = "https://superhero-search.p.rapidapi.com/api/heroes/" + id;

console.log(url);

const idContainer = document.querySelector(".id");

const detailContainer = document.querySelector(".details");

async function getPlanetDetails() {
  try {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1e4972cd5dmsh4c6310fe3e34e92p1be70ejsn26ecc7e83738",
        "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
      },
    };

    const getPlanetUrl = await fetch(url, options);

    const apiResult = await getPlanetUrl.json();

    console.log(apiResult);
    // console.log(singleObject[0].basicDetails[0].mass);

    // html += `<div class=".container">
    //                     <h2>${apiResult[0].basicDetails[0].mass}</h2>
    //                     <p>${planetsApi.description}</p>
    //                     <p>Planet order: ${singleObject[0]}</p>
    //                     </a>
    //                     </div>
    //                 </div>`;

    // getPlanetDetailsHtml.innerHTML = html;
  } catch (error) {
    console.log(error);
    getPlanetDetailsHtml.innerHTML = error;
  }
}

getPlanetDetails();
