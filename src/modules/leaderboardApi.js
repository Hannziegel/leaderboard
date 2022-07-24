import { setLocalStorageID, setLocalStorage } from './localStorageFunctions.js';

/* --------===========  Generate Games ID ===========-------- */
export const createGame = async (loadPage) => {
  const idFetch = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          name: 'Nunito Game',
        },
      ),
    },
  );
  const idJson = await idFetch.json();
  const id = idJson.result.split(' ')[3];
  setLocalStorageID(id);
  loadPage();
};

/* --------===========  Post New Score ===========-------- */
export const postScore = async (urlID, user, score) => {
  const scoreFetch = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${urlID}/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      {
        user,
        score,
      },
    ),
  });
  const scoreJson = await scoreFetch.json();
  return scoreJson;
};

/* --------===========  Get Scores ===========-------- */

export const getScores = async (urlID) => {
  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${urlID}/scores`)
    .then((data) => data.json())
    .then((dataJson) => {
      dataJson = dataJson.result;
      setLocalStorage(dataJson);
    });
};
