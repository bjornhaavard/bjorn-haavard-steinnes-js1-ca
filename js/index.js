const url = `https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list`;
const planets = document.querySelector(".container");
let loader = document.querySelector("#loader");
let planetHtml = "";

async function getThePlanets() {
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

    apiResult.forEach(function (planets) {
      //   if (apiResult) {
      //     loader.style.display = "none";
      //   }

      planetHtml += `       <div style=".container">
                                    <a href="details.html?id=${planets.id}" >
                                    <div class="containerDiv">
                                    <h2>${planets.name}</h2>
                                    <p>${planets.description}</p>
                                    <p>Planet order: ${planets.planetOrder}</p>  
                                    </a>  
                                    </div>
                             </div>`;

      //   return true;
    });
    planets.innerHtml = planetHtml;
  } catch (error) {
    console.log(error);
  }
}
getThePlanets();
