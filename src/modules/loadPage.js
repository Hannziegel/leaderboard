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