const url = `https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list`;
const htmlTest = document.querySelector(".test");
let testHtml = "";

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
      console.log(apiResult[i].name);

      htmlTest.innerHtml += ` <div>
      <h2>${apiResult[i].name}</h2>
      <p>${apiResult[i].description}</p>
      </div>`;
    }
  } catch (error) {
    console.log(error);
  }
}
getThePlanets();
