// import { getThePlanets } from "/js/index.js";

const getPlanetDetailsHtml = document.querySelector("detailsContainer");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if (id === null) {
  location.href = "/";
}

console.log(id);

const url = "https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/" + id;

console.log(url);

const idContainer = document.querySelector(".id");

const detailContainer = document.querySelector(".details");

async function getPlanetDetails() {
  try {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1e4972cd5dmsh4c6310fe3e34e92p1be70ejsn26ecc7e83738",
        "X-RapidAPI-Host": "planets-info-by-newbapi.p.rapidapi.com",
      },
    };

    const getPlanetUrl = await fetch(url, options);

    const apiResult = await getPlanetUrl.json();

    const singleObject = apiResult[0];
    // console.log(singleObject);
    // console.log(singleObject[0].basicDetails[0].mass);

    html += `<div class=".container">
                        <h2>${apiResult[0].basicDetails[0].mass}</h2>
                        <p>${planetsApi.description}</p>
                        <p>Planet order: ${planetsApi.planetOrder}</p>  
                        </a>  
                        </div>
                    </div>`;

    getPlanetDetailsHtml.innerHTML = html;
  } catch (error) {
    console.log(error);
    getPlanetDetailsHtml.innerHTML = error;
  }
}

// getPlanetDetails();
