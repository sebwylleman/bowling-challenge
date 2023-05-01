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

  calculateScore() {
    let score = 0;
    for (let i = 0; i < this.frames.length; i++) {
      const frame = this.frames[i];
      score += frame.firstRoll + frame.secondRoll;
    }
    return score;
  }
}

module.exports = ScoreCard;
