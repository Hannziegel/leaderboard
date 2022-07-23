import _ from 'lodash';
import './style.css';
import { nameInput, scoreInput, submitInputButton, refreshButton } from './modules/htmlConsts';
import { removeAllChildHTML } from './modules/pageFunctions.js';
import { setLocalStorage, checkLocalStorage, setLocalStorageID, getLocalStorageID, checkLocalStorageID, getLocalStorageArr } from './modules/localStorageFunctions.js';
import { postScore, getScores, createGame } from './modules/leaderboardApi';
import Scores from './modules/Scores.js';


/* ----------========== LEADERBOARD API ==========---------- */
if (!checkLocalStorageID()) {
  createGame(loadPage);
} else {
  loadPage();
}

export function loadPage() {
  const gameId = getLocalStorageID();
  let scoresList = new Scores(getScores(gameId));
  setLocalStorage(scoresList.scores);

  const generateHtmlElements = async () => {
    await scoresList.scores;
    checkLocalStorage(scoresList.scores);
  }

  generateHtmlElements()

  /* ----------========== ADD NEW SCORE ==========---------- */

  submitInputButton.addEventListener('click', () => {
    postScore(gameId, nameInput.value, scoreInput.value)
  })

  /* ----------========== REFRESH SCORES ==========---------- */

  refreshButton.addEventListener('click', () => {
    removeAllChildHTML();
    scoresList = new Scores(getScores(gameId));
    setLocalStorage(scoresList.scores);
    generateHtmlElements();
  })
}

