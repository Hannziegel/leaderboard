import './style.css';
import {
  nameInput, scoreInput, submitInputButton, refreshButton,
} from './modules/htmlConsts.js';
import { removeAllChildHTML } from './modules/pageFunctions.js';
import {
  setLocalStorage, checkLocalStorage, getLocalStorageID, checkLocalStorageID,
} from './modules/localStorageFunctions.js';
import { postScore, getScores, createGame } from './modules/leaderboardApi.js';
import Scores from './modules/Scores.js';

const loadPage = () => {
  const gameId = getLocalStorageID();
  let scoresList = new Scores(getScores(gameId));
  setLocalStorage(scoresList.scores);

  const generateHtmlElements = async () => {
    await scoresList.scores;
    checkLocalStorage(scoresList.scores);
  };

  generateHtmlElements();

  submitInputButton.addEventListener('click', () => {
    postScore(gameId, nameInput.value, scoreInput.value);
  });

  refreshButton.addEventListener('click', () => {
    removeAllChildHTML();
    scoresList = new Scores(getScores(gameId));
    setLocalStorage(scoresList.scores);
    generateHtmlElements();
  });
};

if (!checkLocalStorageID()) {
  createGame(loadPage);
} else {
  loadPage();
}
