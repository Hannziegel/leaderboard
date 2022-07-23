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