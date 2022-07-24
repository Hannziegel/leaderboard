import { scoresDiv } from './htmlConsts.js';

export const addScoreHTML = (user, score, scoreIndex) => {
  const scoreContainer = document.createElement('div');

  const scoreUser = document.createElement('p');
  const scoreScore = document.createElement('p');

  scoreContainer.classList.add('scoreContainer');
  scoreContainer.id = scoreIndex;

  scoreUser.classList.add('user');
  scoreUser.textContent = user;

  scoreScore.classList.add('scoreScore');
  scoreScore.textContent = score;

  scoresDiv.appendChild(scoreContainer);
  scoreContainer.append(scoreUser, scoreScore);
};

export const createScoresListHTML = (listArr) => {
  listArr.forEach((e, index) => {
    addScoreHTML(e.user, e.score, index);
  });
};

export const removeAllChildHTML = () => {
  while (scoresDiv.lastChild) {
    scoresDiv.removeChild(scoresDiv.lastChild);
  }
};
