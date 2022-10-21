const url = `https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list`;
const test = (document.querySelector = ".test");
let html = "";

// const loopThis = (apiData) => {
//   for (let i = 0; i < apiData.length; i++) {
//     console.log(apiData[i]);
//   }
// };

export async function getThePlanets() {
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

    console.log(apiResult[0].basicDetails[0].mass);

    for (let i = 0; i < apiResult.length; i++) {
      console.log(apiResult[i]);
      html.innerHTML += `<div>
                        <h2>${apiResult[i].name}</h2>
                        <p>${apiResult[i].description}</p>
                        </div>`;

      test.innerhtml = html;
    }
  } catch (error) {
    console.log(error);
  }
  console.log(apiResult);
}
getThePlanets();
