import { getThePlanets } from "/js/index.js";

const getPlanetDetails = document.querySelector("detailsContainer")

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id)

const url = "https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list" + id 

console.log(apiResult[0].basicDetails[0].mass);

console.log(url)

function getPlanetsHtml(planets) {
    console.log(planets)
}

getPlanetsHtml();