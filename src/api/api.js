export function getExternalData() {
  return fetch('http://www.kusf.org/api/broadcasting')
  //workaround for issue-6679
      .then((response) => {
        setTimeout(() => null, 0);
        console.log(response.json);
        return response.json();

      })
    // return fetch('http://www.kusf.org/api/broadcasting')
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     console.log(responseJson);
    //     return responseJson;
    //   })
      .catch((error) => {
        console.error(error);
      });
}

export async function getTrackList() {
  try {
    let response = await fetch('http://www.kusf.org/api/tracks');
    let responseJson = await response.json();
    // console.log(responseJson)
    return responseJson;
  } catch(error) {
    console.error(error);
  }
}

// export default async getTrackFromApi() {
//   try {
//     let response = await fetch('http://www.kusf.org/api/broadcasting');
//     let responseJson = await response.json();
//     console.log(responseJson);
//     // uhh
//     return responseJson;
//   } catch(error) {
//     console.error(error);
//   }
// }
