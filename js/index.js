import { Api_url } from "./constants/api.js";
import { headers } from "./constants/api.js";
// const url = ;

const players = document.querySelector(".container");
let loader = document.querySelector(".lds-hourglass");
let heroHtml = "";

async function getThePlayers() {
  try {
    const options = {
      method: "GET",
      headers,
    };

    const getUrl = await fetch(Api_url, options);

    const apiResult = await getUrl.json();

    const apiData = apiResult.data;

    console.log(apiResult);

    apiData.forEach((nbaApi) => {
      if (apiData) {
        loader.style.display = "none";
      }

      heroHtml += `<div style=".container">
                                    <a href="details.html?id=${nbaApi.id}" >
                                    <div class="containerDiv">
                                    <h2>First name: ${nbaApi.first_name}</h2>
                                    <h2>Last name: ${nbaApi.last_name}</h2>
                                    <p>Position: ${nbaApi.position}</p>
                                    <p>Id: ${nbaApi.id}</p>
                                    </a>  
                                    </div>
                             </div>`;
      console.log(nbaApi);
      players.innerHTML = heroHtml;
    });
  } catch (error) {
    console.log(error);
    loader.style.display = "none";
    players.innerHTML = `<div class"container"></div><div class="error">There was an error: ${error}</div>`;
  }
}
getThePlayers();
