class ScoreCard {
  constructor() {
    this.frames = [];
  }
  addFrame(firstRoll, secondRoll) {
    this.frames.push({
      firstRoll: firstRoll,
      secondRoll: secondRoll,
    });
  }
  calculateScore() {}
}

module.exports = ScoreCard;
