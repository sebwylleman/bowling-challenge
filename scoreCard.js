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
}

module.exports = ScoreCard;
