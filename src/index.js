import _ from 'lodash';
import './style.css';
<<<<<<< Updated upstream

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
=======
import { nameInput, scoreInput, submitInputButton, refreshButton } from './modules/htmlConsts';
import { removeAllChildHTML } from './modules/pageFunctions.js';
import { setLocalStorage, checkLocalStorage, setLocalStorageID, getLocalStorageID, checkLocalStorageID, getLocalStorageArr } from './modules/localStorageFunctions.js';
import { postScore, getScores, createGame } from './modules/leaderboardApi';
import Scores from './modules/Scores.js';


/* ----------========== LEADERBOARD API ==========---------- */
if (!checkLocalStorageID()) {
  createGame(loadPage);
} else {
  console.log('else ')
  loadPage();
}

export function loadPage() {
  console.log('loadPage ')
  const gameId = getLocalStorageID();
  console.log('gameId = ', gameId);
  let scoresList = new Scores(getScores(gameId));
  setLocalStorage(scoresList.scores);

  const generateHtmlElements = async () => {
    await scoresList.scores;
    console.log('await scoresList = ', scoresList)
    checkLocalStorage(scoresList.scores);
  }

  generateHtmlElements()

  /* ----------========== ADD NEW SCORE ==========---------- */

  submitInputButton.addEventListener('click', () => {
    console.log('clicked')
    postScore(gameId, nameInput.value, scoreInput.value)
  })

  /* ----------========== REFRESH SCORES ==========---------- */

  refreshButton.addEventListener('click', () => {
    console.log('clicked')
    removeAllChildHTML();
    scoresList = new Scores(getScores(gameId));
    setLocalStorage(scoresList.scores);
    generateHtmlElements();
  })
}
>>>>>>> Stashed changes
