const url = `https://superhero-search.p.rapidapi.com/api/heroes`;
const heroes = document.querySelector(".container");
let loader = document.querySelector(".loader");
let heroHtml = "";

async function getTheHeroes() {
  try {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1e4972cd5dmsh4c6310fe3e34e92p1be70ejsn26ecc7e83738",
        "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
      },
    };
    const getUrl = await fetch(url, options);

    const apiResult = await getUrl.json();

    console.log(apiResult);
    // console.log(apiResult[0].basicDetails[0].mass);

    apiResult.forEach((herosApi) => {
      if (apiResult) {
        loader.style.display = "none";
      }

      heroHtml += `<div style=".container">
                                    <a href="details.html?id=${herosApi.name}" >
                                    <div class="containerDiv">
                                    <h2>Name: ${herosApi.name}</h2>
                                    <p>Gender: ${herosApi.appearance.gender}</p>
                                    <p>Occupation: ${herosApi.work.occupation}</p>  
                                    </a>  
                                    </div>
                             </div>`;
      console.log(herosApi);
      heroes.innerHTML = heroHtml;
    });
  } catch (error) {
    console.log(error);
    heroes.innerHtml = error;
  }
}
getTheHeroes();
