export default class Scores {
  constructor (scores) {
    this.scores = scores;
  }

  addScore = (newScore) => this.scores.push(newScore);

  refreshAll = () => {
    this.scores = [];
  };
};
