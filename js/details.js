// import { getThePlanets } from "/js/index.js";

const getPlanetDetailsHtml = document.querySelector("detailsContainer");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = `https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list/` + id + "1e4972cd5dmsh4c6310fe3e34e92p1be70ejsn26ecc7e83738";

console.log(url);

async function getPlanetDetails() {
  try {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1e4972cd5dmsh4c6310fe3e34e92p1be70ejsn26ecc7e83738",
        "X-RapidAPI-Host": "planets-info-by-newbapi.p.rapidapi.com",
      },
    };

    const getUrl = await fetch(url, options);

    const apiResult = await getUrl.json();
    console.log(apiResult);
    console.log(apiResult[0].basicDetails[0].mass);
  } catch (error) {
    console.log(error);
  }
}

getPlanetDetails();
