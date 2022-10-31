// import { getThePlanets } from "/js/index.js";
let html;
let loader = document.querySelector(".loader");

const getHeroDetailsHtml = document.querySelector(".detailsContainer");

const queryString = window.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if (id === null) {
  location.href = "/";
}

console.log(id);

const url = "https://free-nba.p.rapidapi.com/players/" + id;

console.log(url);

const idContainer = document.querySelector(".id");

const detailContainer = document.querySelector(".details");

async function getHeroDetails() {
  try {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1e4972cd5dmsh4c6310fe3e34e92p1be70ejsn26ecc7e83738",
        "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
      },
    };
    const getHerosUrl = await fetch(url, options);

    const apiResult = await getHerosUrl.json();

    // const apiData = apiResult.records;
    console.log(apiResult);
    if (apiResult) {
      loader.style.display = "none";
    }
    html += `
            <div class="containerDiv">
                        <h2> ${apiResult.first_name} ${apiResult.last_name}</h2>
                        <p>Team:  ${apiResult.team.name}</p>
                        <p>City: ${apiResult.team.city}</p>
                        <p>Division: ${apiResult.team.division}</p>
                        </a>
                        </div>
                    `;

    getHeroDetailsHtml.innerHTML = html;
  } catch (error) {
    console.log(error);
    getHeroDetailsHtml.innerHTML = error;
  }
}

getHeroDetails();
