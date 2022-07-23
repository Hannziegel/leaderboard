import { scoresDiv } from "./htmlConsts";

export const addScoreHTML = (user, score, scoreIndex) => {
  console.log('addScoreHTML', user, score, scoreIndex)
  const scoreContainer = document.createElement('div');

  const scoreUser  = document.createElement('p');
  const scoreScore = document.createElement('p');

  scoreContainer.classList.add('scoreContainer');
  scoreContainer.id = scoreIndex;

  scoreUser.classList.add('user');
  scoreUser.textContent = user;

  scoreScore.classList.add('scoreScore');
  scoreScore.textContent = score;

  scoresDiv.appendChild(scoreContainer);
  scoreContainer.append(scoreUser, scoreScore);

  console.log('addScoreHTML ', scoreUser.textContent, scoreScore.textContent)
}

export const createScoresListHTML = (listArr) => {
  console.log('createScoresListHTML listArr = ', listArr)
  listArr.forEach((e, index) => {
    console.log('createScoresListHTML ', e.user, e.score, index)
    addScoreHTML(e.user, e.score, index);
  });
}

export const removeAllChildHTML = () => {
  while (scoresDiv.lastChild){
    scoresDiv.removeChild(scoresDiv.lastChild);
  }
}

