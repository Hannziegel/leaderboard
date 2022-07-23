import { setLocalStorageID, setLocalStorage } from "./localStorageFunctions";

/* --------===========  Generate Games ID ===========-------- */
export const createGame = async (loadPage) => {
  let id;
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      {
        name: 'Nunito Game',
      }
    ),
  })
    .then((data) => data.json()).then((data) => data.result.split(' ')[3])
    .then((data) => {
      id = data;
      /*  console.log(id) */
      setLocalStorageID(id);
      loadPage();
      /* console.log('createGame data = ', data) */
    })
};

/* --------===========  Post New Score ===========-------- */
export const postScore = async (urlID, user, score) => {
  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${urlID}/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      {
        user,
        score
      },
    ),
  }).then((data) => data.json());
}

/* --------===========  Get Scores ===========-------- */

export const getScores = async (urlID) => {
  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${urlID}/scores`)
    .then((data) => data.json())
    .then((dataJson) => dataJson = dataJson.result)
    .then((dataArr) => {
      setLocalStorage(dataArr);
      console.log('getScores dataArr = ', dataArr)
    })
}
