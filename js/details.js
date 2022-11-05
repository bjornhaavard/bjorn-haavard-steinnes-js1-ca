let html;
let loader = document.querySelector(".lds-hourglass");

const getPlayerDetailsHtml = document.querySelector(".detailsContainer");

const queryString = window.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if (id === null) {
  location.href = "/";
}

const url = "https://free-nba.p.rapidapi.com/players/" + id;

const idContainer = document.querySelector(".id");

const detailContainer = document.querySelector(".details");

async function getPlayerDetails() {
  try {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1e4972cd5dmsh4c6310fe3e34e92p1be70ejsn26ecc7e83738",
        "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
      },
    };
    const getPlayerUrl = await fetch(url, options);

    const apiResult = await getPlayerUrl.json();

    if (apiResult) {
      loader.style.display = "none";
    }
    html = `<div class="detailsContainer">
                        <div class="containerDiv">
                        <h2> ${apiResult.first_name} ${apiResult.last_name}</h2>
                        <p>Team:  ${apiResult.team.name}</p>
                        <p>City: ${apiResult.team.city}</p>
                        <p>Division: ${apiResult.team.division}</p>           
                        </div>
                        </div>`;

    getPlayerDetailsHtml.innerHTML = html;
  } catch (error) {
    console.log(error);
    loader.style.display = "none";
    getPlayerDetailsHtml.innerHTML += `<div class"detailsContainer"></div><div class="error">There was an error: ${error}</div>`;
  }
}

getPlayerDetails();
