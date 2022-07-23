import { setLocalStorageID, setLocalStorage } from './localStorageFunctions.js';

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
        },
      ),
    },
  )
    .then((data) => data.json()).then((data) => data.result.split(' ')[3])
    .then((data) => {
      id = data;
      setLocalStorageID(id);
      loadPage();
    });
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
        score,
      },
    ),
  }).then((data) => data.json());
};

/* --------===========  Get Scores ===========-------- */

export const getScores = async (urlID) => {
  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${urlID}/scores`)
    .then((data) => data.json())
    .then((data) => {
      data = data.result;
    })
    .then((data) => {
      setLocalStorage(data);
    });
};
