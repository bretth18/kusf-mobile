export default () => {
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


// async getTrackFromApi() {
//   try {
//     let response = await fetch('http://www.kusf.org/api/broadcasting');
//     let responseJson = await response.json();
//     console.log(responseJson);
//     // uhh
//     // return responseJson.Track;
//   } catch(error) {
//     console.error(error);
//   }
// }
